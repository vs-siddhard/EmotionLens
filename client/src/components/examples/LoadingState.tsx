import { LoadingState } from '../LoadingState';

export default function LoadingStateExample() {
  return (
    <div className="relative min-h-screen bg-background">
      <LoadingState message="Loading emotion detection models..." />
    </div>
  );
}
