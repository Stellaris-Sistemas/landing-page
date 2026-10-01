"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioImage } from "@/lib/portfolio";
import { cn } from "@/lib/cn";
import styles from "./portfolio.module.css";

const EASE_SOFT = [0.2, 0.7, 0.2, 1] as const;
const SWIPE_THRESHOLD = 40;

// A nova imagem entra deslocada 28px: da direita ao avançar, da esquerda ao voltar.
const SLIDE: Variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 28 }),
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0 },
};

type PortfolioCarouselProps = {
  images: PortfolioImage[];
  projectName: string;
  variant: "desktop" | "mobile";
  priority?: boolean;
  className?: string;
};

export function PortfolioCarousel({
  images,
  projectName,
  variant,
  priority = false,
  className,
}: PortfolioCarouselProps) {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const shouldReduceMotion = useReducedMotion();
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  const count = images.length;
  const hasMany = count > 1;
  const isDesktop = variant === "desktop";
  const current = images[index];

  // Dá a volta: depois da última vem a primeira, e vice-versa.
  const step = (delta: number) => setSlide(([i]) => [(i + delta + count) % count, delta]);
  const goTo = (target: number) =>
    setSlide((prev) => (prev[0] === target ? prev : [target, target > prev[0] ? 1 : -1]));

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!hasMany) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
  };

  // Swipe por pointer events; o touch-action: pan-y deixa a rolagem vertical com o navegador.
  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!hasMany || event.pointerType === "mouse") return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) >= SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
  };

  const sizes = isDesktop ? "(min-width: 1024px) 640px, 100vw" : "100vw";
  const neighbors = hasMany
    ? [...new Set([(index + 1) % count, (index - 1 + count) % count])].filter((i) => i !== index)
    : [];

  return (
    <div
      role="group"
      aria-roledescription="carrossel"
      aria-label={`Imagens do ${projectName}`}
      tabIndex={hasMany ? 0 : undefined}
      onKeyDown={handleKeyDown}
      className={cn("flex flex-col rounded-[22px]", isDesktop ? "gap-[22px]" : "gap-4", className)}
    >
      <div
        className={cn(styles.frame, "touch-pan-y")}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => (pointerStart.current = null)}
      >
        <div className={cn(styles.stage, isDesktop ? styles.stageDesktop : styles.stageMobile)}>
          <div className="relative size-full overflow-hidden rounded-t-[12px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={SLIDE}
                initial="enter"
                animate="center"
                exit="exit"
                transition={
                  shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: EASE_SOFT }
                }
                className="absolute inset-0"
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes={sizes}
                  priority={priority && index === 0}
                  unoptimized={current.src.endsWith(".svg")}
                  draggable={false}
                  className="object-cover object-top select-none"
                />
              </motion.div>
            </AnimatePresence>

            {/* Pré-carrega a próxima e a anterior (mesma URL que será exibida). */}
            {neighbors.map((i) => (
              <Image
                key={images[i].src}
                src={images[i].src}
                alt=""
                aria-hidden="true"
                fill
                sizes={sizes}
                loading="eager"
                unoptimized={images[i].src.endsWith(".svg")}
                className="invisible object-cover object-top"
              />
            ))}
          </div>
        </div>

        {hasMany && (
          <>
            <button
              type="button"
              aria-label="Imagem anterior"
              onClick={() => step(-1)}
              className={cn(
                styles.arrow,
                "absolute top-1/2 left-3.5 z-10 flex -translate-y-1/2 items-center justify-center rounded-full",
                isDesktop ? "size-11" : "size-10",
              )}
            >
              <ChevronLeft aria-hidden="true" size={isDesktop ? 22 : 20} />
            </button>
            <button
              type="button"
              aria-label="Próxima imagem"
              onClick={() => step(1)}
              className={cn(
                styles.arrow,
                "absolute top-1/2 right-3.5 z-10 flex -translate-y-1/2 items-center justify-center rounded-full",
                isDesktop ? "size-11" : "size-10",
              )}
            >
              <ChevronRight aria-hidden="true" size={isDesktop ? 22 : 20} />
            </button>
          </>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <p aria-live="polite" className="m-0 text-[15px] font-medium text-text">
          {current.caption}
        </p>

        {hasMany && (
          <div className="flex shrink-0 items-center gap-[18px]">
            <div className="flex items-center gap-2">
              {images.map((image, i) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Ir para a imagem ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => goTo(i)}
                  className={cn(styles.dotButton, "flex h-6 items-center")}
                >
                  <span className={cn(styles.dot, i === index && styles.dotCurrent)} />
                </button>
              ))}
            </div>
            <span className="text-[13px] font-medium tracking-[0.1em] text-text-3 tabular-nums">
              {index + 1} / {count}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
