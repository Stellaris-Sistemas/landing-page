import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./contactButtons.module.css";

type WhatsAppButtonProps = {
  href: string;
  icon: ReactNode;
  className?: string;
  children: ReactNode;
};

export function WhatsAppButton({ href, icon, className, children }: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(styles.expand, className)}
    >
      <span className={styles.iconSlot}>{icon}</span>
      {children}
    </a>
  );
}
