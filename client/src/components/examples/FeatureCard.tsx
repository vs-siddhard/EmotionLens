import { FeatureCard } from '../FeatureCard';
import { Camera, Brain, BarChart3 } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={Camera}
          title="Real-Time Detection"
          description="Instant emotion recognition using advanced facial analysis technology"
        />
        <FeatureCard
          icon={Brain}
          title="Multi-Emotion Support"
          description="Detects happiness, sadness, anger, surprise, neutral, and more"
        />
        <FeatureCard
          icon={BarChart3}
          title="Confidence Scoring"
          description="Get precise confidence percentages for each detected emotion"
        />
      </div>
    </div>
  );
}
