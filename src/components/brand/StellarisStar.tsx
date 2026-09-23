import { cn } from "@/lib/cn";

// Ponta inferior (108) mais curta que a superior (114) de propósito: dá à
// estrela a sensação de estar apontando para cima. Não deve ser "corrigido".
export const STAR_PATH = "M0,-114 L17,-17 L114,0 L17,17 L0,108 L-17,17 L-114,0 L-17,-17 Z";

type StellarisStarProps = {
  size?: number;
  className?: string;
};

export function StellarisStar({ size = 24, className }: StellarisStarProps) {
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
