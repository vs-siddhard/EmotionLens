import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface GlowButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  icon?: boolean;
}

export function GlowButton({ onClick, children, icon = true }: GlowButtonProps) {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className="px-12 py-6 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground border-2 border-primary-border animate-pulse-glow hover:scale-105 transition-transform duration-300"
      data-testid="button-start-detection"
    >
      {children}
      {icon && <ArrowRight className="ml-2 h-5 w-5" />}
    </Button>
  );
}
