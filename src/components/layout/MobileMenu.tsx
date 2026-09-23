"use client";

import { useEffect, useRef } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { CONTACT_CTA, NAV_LINKS } from "@/lib/constants";

type MobileMenuProps = {
  id: string;
  open: boolean;
  onClose: (restoreFocus: boolean) => void;
};

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    dialog.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose(true);
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE));
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !dialog.contains(active))) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && (active === last || !dialog.contains(active))) {
        event.preventDefault();
        first?.focus();
      }
    };

    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) onClose(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);

    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open, onClose]);

  if (!open) return null;

  const closeAfterNavigation = () => onClose(false);

  return (
    <div
      ref={dialogRef}
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-bg lg:hidden"
    >
      <div className="container-page flex h-(--header-h) shrink-0 items-center justify-between border-b border-border/70">
        <Logo onClick={closeAfterNavigation} />
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={() => onClose(true)}
          className="-mr-2.5 flex size-11 items-center justify-center rounded-btn text-text"
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <nav aria-label="Principal (mobile)" className="container-page flex flex-1 flex-col py-8">
        <ul className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-b border-border/70">
              <a
                href={link.href}
                onClick={closeAfterNavigation}
                className="heading-display flex min-h-16 items-center text-[28px] text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          href={CONTACT_CTA.href}
          size="lg"
          onClick={closeAfterNavigation}
          className="mt-10 w-full"
        >
          {CONTACT_CTA.label}
        </Button>
      </nav>
    </div>
  );
}
