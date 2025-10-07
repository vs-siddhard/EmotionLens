import { Hero3D } from "@/components/Hero3D";
import { GlowButton } from "@/components/GlowButton";
import { FeatureCard } from "@/components/FeatureCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Camera, Brain, BarChart3, Zap, Shield, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HomePageProps {
  onStartDetection: () => void;
}

export default function HomePage({ onStartDetection }: HomePageProps) {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Hero3D />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Real-Time
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-4 to-chart-2 bg-clip-text text-transparent">
              Emotion Detection
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            AI-powered facial emotion recognition using your webcam. Experience cutting-edge technology that detects happiness, sadness, anger, surprise, and more in real-time.
          </p>
          
          <GlowButton onClick={onStartDetection}>
            Start Detection
          </GlowButton>
        </div>
      </section>

      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Powerful Features
          </h2>
          <p className="text-muted-foreground text-lg">
            Advanced AI technology at your fingertips
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Camera}
            title="Real-Time Detection"
            description="Instant emotion recognition using advanced facial analysis technology with live video processing"
          />
          <FeatureCard
            icon={Brain}
            title="Multi-Emotion Support"
            description="Detects happiness, sadness, anger, surprise, neutral, fear, and disgust with high accuracy"
          />
          <FeatureCard
            icon={BarChart3}
            title="Confidence Scoring"
            description="Get precise confidence percentages for each detected emotion with visual progress indicators"
          />
        </div>
      </section>

      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Three simple steps to emotion detection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary border-2 border-primary/20">
                1
              </div>
              <h3 className="text-xl font-semibold">Enable Camera</h3>
              <p className="text-muted-foreground">
                Grant camera access to begin real-time facial detection
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary border-2 border-primary/20">
                2
              </div>
              <h3 className="text-xl font-semibold">AI Analysis</h3>
              <p className="text-muted-foreground">
                Advanced neural networks analyze facial expressions instantly
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary border-2 border-primary/20">
                3
              </div>
              <h3 className="text-xl font-semibold">View Results</h3>
              <p className="text-muted-foreground">
                See emotion labels and confidence scores in real-time
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Powered By
            </h2>
            <p className="text-muted-foreground text-lg">
              Built with cutting-edge technologies
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-6 py-3 text-base gap-2">
              <Sparkles className="h-4 w-4" />
              Three.js
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-base gap-2">
              <Brain className="h-4 w-4" />
              face-api.js
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-base gap-2">
              <Zap className="h-4 w-4" />
              TensorFlow.js
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-base gap-2">
              <Shield className="h-4 w-4" />
              WebRTC
            </Badge>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>Real-Time Emotion Detection © 2025</p>
          <p className="text-sm mt-2">All camera processing happens locally in your browser. No data is stored or transmitted.</p>
        </div>
      </footer>
    </div>
  );
}
