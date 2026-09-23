import { useId, type CSSProperties } from "react";
import { STAR_PATH } from "@/components/brand/NorthStar";
import { cn } from "@/lib/cn";

const C = 380;

const TEXTURE_RADII = [130, 160, 184, 207, 230, 254, 278, 301, 324, 347, 368];

type Arc = {
  r: number;
  tone: "glow" | "warm";
  opacity: number;
  width: number;
  dash: string;
  desktopOnly?: boolean;
};

const ARC_GROUPS: Array<{ className: string; arcs: Arc[] }> = [
  {
    className: "r1",
    arcs: [
      { r: 150, tone: "glow", opacity: 0.55, width: 1, dash: "34 120 8 200" },
      { r: 172, tone: "glow", opacity: 0.35, width: 1, dash: "90 260 20 140" },
      { r: 196, tone: "warm", opacity: 0.3, width: 1.2, dash: "12 80 60 300" },
      { r: 218, tone: "glow", opacity: 0.4, width: 1, dash: "140 200 40 260" },
    ],
  },
  {
    className: "r2",
    arcs: [
      { r: 242, tone: "glow", opacity: 0.3, width: 1, dash: "60 180 16 320" },
      { r: 266, tone: "glow", opacity: 0.45, width: 1.2, dash: "200 340 30 180" },
      { r: 290, tone: "warm", opacity: 0.25, width: 1, dash: "18 140 80 260" },
      { r: 312, tone: "glow", opacity: 0.3, width: 1, dash: "110 300 50 220" },
    ],
  },
  {
    className: "r3",
    arcs: [
      { r: 336, tone: "glow", opacity: 0.25, width: 1, dash: "240 380 20 300" },
      { r: 356, tone: "glow", opacity: 0.2, width: 1, dash: "70 220 140 360" },
      { r: 372, tone: "glow", opacity: 0.16, width: 1, dash: "30 160 90 400", desktopOnly: true },
    ],
  },
];

const PARTICLES = [
  { x: 120, y: 210, r: 1.1, o: 0.45 },
  { x: 610, y: 140, r: 1.3, o: 0.5 },
  { x: 650, y: 560, r: 0.9, o: 0.35 },
  { x: 210, y: 620, r: 1.2, o: 0.4 },
  { x: 470, y: 250, r: 0.8, o: 0.3 },
  { x: 300, y: 520, r: 1, o: 0.4 },
  { x: 540, y: 430, r: 0.9, o: 0.35 },
  { x: 90, y: 430, r: 1.2, o: 0.45 },
];

const strokeWidth = (w: number) => ({ "--w": w }) as CSSProperties;

export function StarTrails({ className }: { className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const haloId = `${uid}-halo`;
  const glowId = `${uid}-glow`;

  return (
    <svg
      viewBox="0 0 760 760"
      aria-hidden="true"
      focusable="false"
      className={cn("trails block size-full overflow-visible", className)}
    >
      <defs>
        <radialGradient id={haloId}>
          <stop offset="0%" style={{ stopColor: "var(--color-brand)", stopOpacity: 0.42 }} />
          <stop offset="55%" style={{ stopColor: "var(--color-brand)", stopOpacity: 0.08 }} />
          <stop offset="100%" style={{ stopColor: "var(--color-brand)", stopOpacity: 0 }} />
        </radialGradient>
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g fill="none" className="stroke-glow">
        {TEXTURE_RADII.map((r) => (
          <circle key={r} cx={C} cy={C} r={r} strokeOpacity={0.05} className="trail" />
        ))}
      </g>

      {ARC_GROUPS.map((group) => (
        <g key={group.className} fill="none" className={cn("ring", group.className)}>
          {group.arcs.map((arc) => (
            <circle
              key={arc.r}
              cx={C}
              cy={C}
              r={arc.r}
              strokeOpacity={arc.opacity}
              strokeDasharray={arc.dash}
              strokeLinecap="round"
              style={strokeWidth(arc.width)}
              className={cn(
                "trail",
                arc.tone === "warm" ? "stroke-warm" : "stroke-glow",
                arc.desktopOnly && "max-lg:hidden",
              )}
            />
          ))}
        </g>
      ))}

      <g className="fill-text">
        {PARTICLES.map((p) => (
          <circle key={`${p.x}-${p.y}`} cx={p.x} cy={p.y} r={p.r} opacity={p.o} />
        ))}
      </g>

      <circle cx={C} cy={C} r={200} fill={`url(#${haloId})`} className="halo" />

      <g transform={`translate(${C} ${C})`}>
        <path d={STAR_PATH} className="fill-brand" />
        <path
          d={STAR_PATH}
          fill="none"
          strokeOpacity={0.22}
          strokeLinejoin="round"
          className="trail stroke-glow"
        />
        <path
          d={STAR_PATH}
          pathLength={1000}
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter={`url(#${glowId})`}
          className="beam stroke-beam"
        />
      </g>
    </svg>
  );
}
