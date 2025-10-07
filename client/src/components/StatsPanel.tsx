import { Card } from "@/components/ui/card";
import { Activity, Users } from "lucide-react";

interface StatsPanelProps {
  faceCount: number;
  fps: number;
}

export function StatsPanel({ faceCount, fps }: StatsPanelProps) {
  return (
    <Card className="backdrop-blur-xl bg-card/80 border-card-border p-4 rounded-xl shadow-lg">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Faces:</span>
          <span className="text-sm font-mono font-semibold" data-testid="text-face-count">
            {faceCount}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">FPS:</span>
          <span className="text-sm font-mono font-semibold" data-testid="text-fps">
            {fps}
          </span>
        </div>
      </div>
    </Card>
  );
}
