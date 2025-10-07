import { useEffect, useRef, useState } from "react";
import { LoadingState } from "@/components/LoadingState";
import { ControlPanel } from "@/components/ControlPanel";
import { StatsPanel } from "@/components/StatsPanel";
import { FaceBox } from "@/components/FaceBox";
import { EmotionLabel } from "@/components/EmotionLabel";
import type { FaceDetection, EmotionType } from "@shared/schema";
import * as faceapi from "face-api.js";

interface DetectionPageProps {
  onStop: () => void;
}

export default function DetectionPage({ onStop }: DetectionPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Initializing camera...");
  const [detections, setDetections] = useState<FaceDetection[]>([]);
  const [fps, setFps] = useState(0);
  const animationFrameRef = useRef<number>();
  const lastFrameTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const loadModels = async () => {
      try {
        setLoadingMessage("Loading AI models...");
        const MODEL_URL = "https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/";
        
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]);

        setLoadingMessage("Accessing camera...");
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 1280, height: 720 },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
            setIsLoading(false);
            startDetection();
          };
        }
      } catch (error) {
        console.error("Error loading models or camera:", error);
        setLoadingMessage("Error: Unable to access camera or load models");
      }
    };

    loadModels();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startDetection = async () => {
    const detectFaces = async () => {
      if (!videoRef.current || !canvasRef.current) return;

      const currentTime = Date.now();
      const deltaTime = currentTime - lastFrameTimeRef.current;
      const currentFps = Math.round(1000 / deltaTime);
      setFps(currentFps);
      lastFrameTimeRef.current = currentTime;

      const detectionResults = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      const faceDetections: FaceDetection[] = detectionResults.map((result) => {
        const expressions = result.expressions;
        const emotionsArray: { emotion: EmotionType; confidence: number }[] = [
          { emotion: "happy", confidence: expressions.happy * 100 },
          { emotion: "sad", confidence: expressions.sad * 100 },
          { emotion: "angry", confidence: expressions.angry * 100 },
          { emotion: "surprised", confidence: expressions.surprised * 100 },
          { emotion: "neutral", confidence: expressions.neutral * 100 },
          { emotion: "fearful", confidence: expressions.fearful * 100 },
          { emotion: "disgusted", confidence: expressions.disgusted * 100 },
        ];

        const dominant = emotionsArray.reduce((prev, current) =>
          prev.confidence > current.confidence ? prev : current
        );

        return {
          x: result.detection.box.x,
          y: result.detection.box.y,
          width: result.detection.box.width,
          height: result.detection.box.height,
          emotions: emotionsArray,
          dominantEmotion: dominant.emotion,
          dominantConfidence: dominant.confidence,
        };
      });

      setDetections(faceDetections);
      animationFrameRef.current = requestAnimationFrame(detectFaces);
    };

    detectFaces();
  };

  return (
    <div className="relative w-screen h-screen bg-background overflow-hidden">
      {isLoading && <LoadingState message={loadingMessage} />}

      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {detections.map((detection, index) => (
        <div key={index}>
          <FaceBox
            x={detection.x}
            y={detection.y}
            width={detection.width}
            height={detection.height}
            emotion={detection.dominantEmotion}
          />
          <EmotionLabel
            emotion={detection.dominantEmotion}
            confidence={detection.dominantConfidence}
            x={detection.x}
            y={detection.y}
          />
        </div>
      ))}

      <div className="absolute top-4 right-4 z-20">
        <StatsPanel faceCount={detections.length} fps={fps} />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-4xl px-4">
        <ControlPanel onStop={onStop} />
      </div>
    </div>
  );
}
