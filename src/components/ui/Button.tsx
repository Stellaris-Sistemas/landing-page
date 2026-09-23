import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  variant?: "solid" | "ghost";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

const variants = {
  solid: "bg-brand text-text font-semibold hover:bg-brand-hover",
  ghost: "border border-border text-text font-medium hover:border-border-strong hover:bg-surface-1",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-[55px] px-[26px] text-[15px]",
};

export function Button({
  href,
  variant = "solid",
  size = "md",
  className,
  onClick,
  children,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-btn whitespace-nowrap transition-colors duration-200",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
