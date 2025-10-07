import { FaceBox } from '../FaceBox';

export default function FaceBoxExample() {
  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center">
      <div className="relative w-[640px] h-[480px] bg-card rounded-xl border border-card-border">
        <FaceBox x={100} y={80} width={200} height={250} emotion="happy" />
        <FaceBox x={340} y={120} width={180} height={220} emotion="sad" />
      </div>
    </div>
  );
}
