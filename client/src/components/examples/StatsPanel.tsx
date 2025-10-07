import { StatsPanel } from '../StatsPanel';

export default function StatsPanelExample() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <StatsPanel faceCount={2} fps={30} />
    </div>
  );
}
