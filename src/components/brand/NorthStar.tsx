import { cn } from "@/lib/cn";

// Ponta inferior (108) mais curta que a superior (114) de propósito: a estrela aponta para o norte.
export const STAR_PATH = "M0,-114 L17,-17 L114,0 L17,17 L0,108 L-17,17 L-114,0 L-17,-17 Z";

type NorthStarProps = {
  size?: number;
  className?: string;
};

export function NorthStar({ size = 24, className }: NorthStarProps) {
  return (
    <svg
      viewBox="-120 -120 240 240"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", className)}
    >
      <path d={STAR_PATH} className="fill-brand" />
    </svg>
  );
}
