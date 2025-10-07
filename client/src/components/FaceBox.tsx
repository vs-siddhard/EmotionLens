import type { EmotionType } from "@shared/schema";

interface FaceBoxProps {
  x: number;
  y: number;
  width: number;
  height: number;
  emotion: EmotionType;
}

const emotionColors: Record<EmotionType, string> = {
  happy: "#ffd700",
  sad: "#4169e1",
  angry: "#ff4444",
  surprised: "#da70d6",
  neutral: "#808080",
  fearful: "#9370db",
  disgusted: "#32cd32",
};

export function FaceBox({ x, y, width, height, emotion }: FaceBoxProps) {
  return (
    <div
      className="absolute animate-scale-in pointer-events-none"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        border: `3px solid ${emotionColors[emotion]}`,
        borderRadius: "12px",
        boxShadow: `0 0 20px ${emotionColors[emotion]}40`,
      }}
    />
  );
}
