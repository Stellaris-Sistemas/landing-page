import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import styles from "./button.module.css";

type BeamButtonProps = {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export function BeamButton({ href, className, onClick, children }: BeamButtonProps) {
  return (
    <a href={href} onClick={onClick} className={cn(styles.beamWrapper, "group", className)}>
      <span className={styles.beamInner}>
        {children}
        <ArrowRight
          aria-hidden="true"
          size={18}
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-[3px] group-focus-visible:translate-x-[3px]"
        />
      </span>
    </a>
  );
}
