"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import { STAR_PATH } from "@/components/brand/StellarisStar";
import { cn } from "@/lib/cn";
import styles from "./portfolio.module.css";

const DRAW_DURATION = 1.2;
const EASE_SOFT = [0.2, 0.7, 0.2, 1] as const;

const PROJECT_STAR = { active: 30, inactive: 18 };
const SMALL_STAR = 9;

type Point = { x: number; y: number };

type StarProps = Point & {
  size: number;
  className: string;
  visible: boolean;
  delay: number;
  twinkleDelay: number;
  reduceMotion: boolean;
};

function Star({ x, y, size, className, visible, delay, twinkleDelay, reduceMotion }: StarProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.4, delay }}
      >
        <g className={styles.twinkle} style={{ animationDelay: `${twinkleDelay}s` }}>
          <path
            d={STAR_PATH}
            className={cn(styles.star, className)}
            style={{ transform: `scale(${size / 240})` }}
          />
        </g>
      </motion.g>
    </g>
  );
}

type PortfolioConstellationProps = {
  /** Centro vertical (em px, relativo ao topo da lista) do nome de cada projeto. */
  itemCenters: number[];
  /** Altura total da área da lista (para posicionar a estrela pequena de baixo). */
  height: number;
  active: number;
  inView: boolean;
};

export function PortfolioConstellation({
  itemCenters,
  height,
  active,
  inView,
}: PortfolioConstellationProps) {
  const clipId = `${useId().replace(/[^a-zA-Z0-9_-]/g, "")}-portfolio-draw`;
  const reduceMotion = useReducedMotion() ?? false;
  const visible = (inView || reduceMotion) && height > 0;

  // Zigue-zague: x = 20, 44, 20...
  const stars: Point[] = itemCenters.map((y, i) => ({ x: i % 2 === 0 ? 20 : 44, y }));
  const top: Point = { x: 50, y: -30 };
  const bottom: Point = { x: 36, y: height + 30 };

  const toPath = (points: Point[]) =>
    points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`).join(" ");

  // Cada estrela aparece quando a linha (que se desenha de cima para baixo) chega nela.
  const drawSpan = height + 120;
  const delayAt = (y: number) => (DRAW_DURATION * (y + 60)) / Math.max(drawSpan, 1);

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={72}
      height={Math.max(height, 0)}
      className="pointer-events-none absolute top-0 left-0 overflow-visible"
    >
      <defs>
        <clipPath id={clipId}>
          <motion.rect
            x={-40}
            y={-60}
            width={160}
            initial={{ height: 0 }}
            animate={{ height: visible ? drawSpan : 0 }}
            transition={
              reduceMotion ? { duration: 0 } : { duration: DRAW_DURATION, ease: EASE_SOFT }
            }
          />
        </clipPath>
      </defs>

      {stars.length > 0 && (
        <>
          <g
            clipPath={`url(#${clipId})`}
            fill="none"
            strokeWidth={2.5}
            strokeLinecap="round"
            className="stroke-brand-light"
          >
            <path d={toPath([top, stars[0]])} strokeOpacity={0.3} className={styles.flow} />
            <path d={toPath(stars)} strokeOpacity={0.6} className={styles.flow} />
            <path
              d={toPath([stars[stars.length - 1], bottom])}
              strokeOpacity={0.3}
              className={styles.flow}
            />
          </g>

          <Star
            {...top}
            size={SMALL_STAR}
            className="fill-text-2"
            visible={visible}
            delay={delayAt(top.y)}
            twinkleDelay={0.4}
            reduceMotion={reduceMotion}
          />
          {stars.map((star, i) => (
            <Star
              key={i}
              {...star}
              size={i === active ? PROJECT_STAR.active : PROJECT_STAR.inactive}
              className={i === active ? cn("fill-glow", styles.starGlow) : "fill-border-strong"}
              visible={visible}
              delay={delayAt(star.y)}
              twinkleDelay={i * 1.3}
              reduceMotion={reduceMotion}
            />
          ))}
          <Star
            {...bottom}
            size={SMALL_STAR}
            className="fill-text-2"
            visible={visible}
            delay={delayAt(bottom.y)}
            twinkleDelay={2.2}
            reduceMotion={reduceMotion}
          />
        </>
      )}
    </svg>
  );
}
