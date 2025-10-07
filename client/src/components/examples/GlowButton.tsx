import { GlowButton } from '../GlowButton';

export default function GlowButtonExample() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <GlowButton onClick={() => console.log('Start Detection clicked')}>
        Start Detection
      </GlowButton>
    </div>
  );
}
