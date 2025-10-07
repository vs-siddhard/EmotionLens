import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-8 hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="p-4 rounded-xl bg-primary/10">
          <Icon className="h-12 w-12 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
}
