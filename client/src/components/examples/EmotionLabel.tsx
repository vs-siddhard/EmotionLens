import { EmotionLabel } from '../EmotionLabel';

export default function EmotionLabelExample() {
  return (
    <div className="relative min-h-screen bg-background p-8 flex items-center justify-center">
      <div className="relative w-96 h-64 bg-card rounded-xl border border-card-border">
        <EmotionLabel emotion="happy" confidence={92.5} x={50} y={100} />
        <EmotionLabel emotion="sad" confidence={78.3} x={250} y={180} />
      </div>
    </div>
  );
}
