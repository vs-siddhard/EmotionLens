import { Badge } from "@/components/ui/badge";
import type { EmotionType } from "@shared/schema";

interface EmotionLabelProps {
  emotion: EmotionType;
  confidence: number;
  x: number;
  y: number;
}

const emotionConfig: Record<EmotionType, { color: string; emoji: string }> = {
  happy: { color: "hsl(48 100% 55%)", emoji: "😊" },
  sad: { color: "hsl(210 80% 55%)", emoji: "😢" },
  angry: { color: "hsl(0 75% 55%)", emoji: "😠" },
  surprised: { color: "hsl(280 70% 60%)", emoji: "😮" },
  neutral: { color: "hsl(180 15% 65%)", emoji: "😐" },
  fearful: { color: "hsl(260 60% 60%)", emoji: "😨" },
  disgusted: { color: "hsl(120 40% 50%)", emoji: "🤢" },
};

export function EmotionLabel({ emotion, confidence, x, y }: EmotionLabelProps) {
  const config = emotionConfig[emotion];
  
  return (
    <div
      className="absolute animate-scale-in"
      style={{
        left: `${x}px`,
        top: `${y - 48}px`,
      }}
    >
      <div className="backdrop-blur-md bg-card/90 border border-card-border rounded-lg px-4 py-2 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-lg">{config.emoji}</span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold capitalize" style={{ color: config.color }}>
              {emotion}
            </span>
            <div className="flex items-center gap-2">
              <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-200"
                  style={{
                    width: `${confidence}%`,
                    backgroundColor: config.color,
                  }}
                />
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                {confidence.toFixed(0)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
