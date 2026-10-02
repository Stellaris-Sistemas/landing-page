import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./button.module.css";

type ButtonProps = {
  href: string;
  variant?: "glass" | "ghost";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

// Cada variante tem uma altura própria fixa (não um "size" livre), porque é
// assim que o novo estilo de pílulas foi especificado: vidro (header) sempre
// 44px, transparente (hero) sempre 57px.
const VARIANTS = {
  glass: {
    module: styles.glass,
    classes: "h-11 px-[18px] text-sm font-medium text-text",
  },
  ghost: {
    module: styles.ghost,
    classes: "h-[57px] px-7 text-base font-medium text-text",
  },
} as const;

export function Button({ href, variant = "glass", className, onClick, children }: ButtonProps) {
  const { module, classes } = VARIANTS[variant];

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full whitespace-nowrap",
        module,
        classes,
        className,
      )}
    >
      {children}
    </a>
  );
}
