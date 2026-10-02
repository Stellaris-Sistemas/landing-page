"use client";

import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { CONTACT_CTA, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { MobileMenu } from "./MobileMenu";

const SCROLL_THRESHOLD = 12;

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

export function Header() {
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > SCROLL_THRESHOLD,
    () => false,
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback((restoreFocus: boolean) => {
    setMenuOpen(false);
    if (restoreFocus) menuButtonRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 h-(--header-h) border-b border-border/70 transition-[background-color,backdrop-filter] duration-300",
          scrolled ? "bg-bg/70 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="container-page flex h-full items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-x-8">
          <Logo className="justify-self-start" />

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-sm text-[15px] font-medium text-text-2 transition-colors duration-200 hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden justify-self-end lg:block">
            <Button variant="glass" href={CONTACT_CTA.href}>
              {CONTACT_CTA.label}
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen(true)}
            className="-mr-2.5 flex size-11 flex-col items-center justify-center gap-[7px] rounded-btn lg:hidden"
          >
            <span className="h-[1.5px] w-[22px] rounded-full bg-text" />
            <span className="h-[1.5px] w-[22px] rounded-full bg-text" />
          </button>
        </div>
      </header>

      <MobileMenu id="menu-mobile" open={menuOpen} onClose={closeMenu} />
    </>
  );
}
