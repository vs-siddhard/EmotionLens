import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Info } from "lucide-react";

interface ControlPanelProps {
  onStop: () => void;
}

export function ControlPanel({ onStop }: ControlPanelProps) {
  return (
    <Card className="backdrop-blur-xl bg-card/90 border-card-border p-6 rounded-xl shadow-xl">
      <div className="flex items-center gap-6 flex-wrap">
        <Button
          variant="destructive"
          onClick={onStop}
          data-testid="button-stop-detection"
          className="gap-2"
        >
          <X className="h-4 w-4" />
          Stop Detection
        </Button>
        
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Emotion Legend:</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="gap-1">
            <span>😊</span> Happy
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <span>😢</span> Sad
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <span>😠</span> Angry
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <span>😮</span> Surprised
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <span>😐</span> Neutral
          </Badge>
        </div>
      </div>
    </Card>
  );
}
