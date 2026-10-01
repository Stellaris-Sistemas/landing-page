import { Reveal } from "@/components/motion/Reveal";
import { STAR_PATH } from "@/components/brand/StellarisStar";
import { cn } from "@/lib/cn";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";
import { PortfolioCarousel } from "./PortfolioCarousel";
import styles from "./portfolio.module.css";

// Abaixo de 1024px: todos os projetos empilhados, com uma constelação vertical
// pela margem esquerda (uma estrela antes de cada nome, ligadas por uma linha
// pontilhada). Quem chama define o display.
export function PortfolioMobileList({ className }: { className?: string }) {
  const lastIndex = PORTFOLIO_PROJECTS.length - 1;

  return (
    <div className={cn("flex-col gap-14", className)}>
      {PORTFOLIO_PROJECTS.map((project, index) => (
        <Reveal key={project.slug} as="article" className="relative pl-10">
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="-120 -120 240 240"
            className="absolute top-2 left-0 size-[22px] overflow-visible"
          >
            <g className={styles.twinkle} style={{ animationDelay: `${index * 1.3}s` }}>
              <path d={STAR_PATH} className={cn("fill-glow", styles.starGlow)} />
            </g>
          </svg>

          {/* Trecho da linha até a estrela do próximo projeto (atravessa o gap de 56px). */}
          {index < lastIndex && (
            <div aria-hidden="true" className="absolute top-9 -bottom-[58px] left-[9px] w-1">
              <svg focusable="false" className="block size-full overflow-visible">
                <line
                  x1={2}
                  x2={2}
                  y1={0}
                  y2="100%"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeOpacity={0.6}
                  className={cn(styles.flow, "stroke-brand-light")}
                />
              </svg>
            </div>
          )}

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="m-0 text-[34px] leading-[1.1] font-semibold tracking-[-0.03em] text-text">
                {project.name}
              </h3>
              <p className="m-0 text-xs font-medium tracking-[0.16em] text-text-3 uppercase">
                {project.category}
              </p>
            </div>

            <PortfolioCarousel
              images={project.images}
              projectName={project.name}
              variant="mobile"
            />

            <p className="m-0 text-base leading-[1.65] text-text-2">{project.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
