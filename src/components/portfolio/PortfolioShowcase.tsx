"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";
import { PortfolioCarousel } from "./PortfolioCarousel";
import { PortfolioConstellation } from "./PortfolioConstellation";

const EASE_SOFT = [0.2, 0.7, 0.2, 1] as const;
const PANEL_ID = "portfolio-preview";
const tabId = (slug: string) => `portfolio-tab-${slug}`;

// Desktop: lista de projetos como abas verticais (WAI-ARIA Tabs, ativação
// automática) e a prévia do projeto ativo ao lado. Quem chama define o display
// (a versão empilhada do mobile fica em PortfolioMobileList).
export function PortfolioShowcase({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const [hasSwitched, setHasSwitched] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const nameRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(listRef, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  // A lista é esticada (grid items-stretch) para ficar tão alta quanto a
  // prévia ao lado, então a altura de cada item não é mais fixa: a
  // constelação precisa da posição real do nome de cada projeto, medida após
  // o layout, em vez de calculada a partir de uma altura constante.
  const [centers, setCenters] = useState<number[]>([]);
  const [listHeight, setListHeight] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    // offsetTop/offsetHeight (não getBoundingClientRect): o Reveal anima
    // entrada com translateY, e isso não muda o tamanho do elemento — o
    // ResizeObserver nunca dispararia de novo para corrigir uma medida feita
    // antes da animação assentar. offsetTop ignora transform, então a medida
    // já sai correta mesmo durante a animação de entrada. O motion.div do
    // Reveal fica com position: relative (próprio da lib), então ele vira o
    // offsetParent de cada nome — soma-se a cadeia inteira até o listRef, em
    // vez de supor que o offsetParent é sempre o próprio listRef.
    const offsetTopUntil = (el: HTMLElement, ancestor: HTMLElement) => {
      let top = 0;
      let node: HTMLElement | null = el;
      while (node && node !== ancestor) {
        top += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      return node === ancestor ? top : null;
    };

    const measure = () => {
      setCenters(
        nameRefs.current.map((el) => {
          if (!el) return 0;
          const top = offsetTopUntil(el, list);
          return (top ?? 0) + el.offsetHeight / 2;
        }),
      );
      setListHeight(list.offsetHeight);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(list);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const count = PORTFOLIO_PROJECTS.length;
  const project = PORTFOLIO_PROJECTS[active];

  const activate = (index: number) => {
    if (index === active) return;
    setActive(index);
    setHasSwitched(true);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const targets: Record<string, number> = {
      ArrowDown: (index + 1) % count,
      ArrowUp: (index - 1 + count) % count,
      Home: 0,
      End: count - 1,
    };
    const next = targets[event.key];
    if (next === undefined) return;
    event.preventDefault();
    tabRefs.current[next]?.focus();
  };

  return (
    <div className={cn("grid-cols-[500px_minmax(0,1fr)] items-stretch gap-20", className)}>
      <div ref={listRef} className="relative h-full">
        <PortfolioConstellation
          itemCenters={centers}
          height={listHeight}
          active={active}
          inView={inView}
        />

        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="Projetos"
          className="flex h-full flex-col border-t border-border"
        >
          {PORTFOLIO_PROJECTS.map((item, index) => {
            const isActive = index === active;
            return (
              <Reveal key={item.slug} delay={index * 0.1} className="flex-1">
                <button
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={tabId(item.slug)}
                  aria-selected={isActive}
                  aria-controls={PANEL_ID}
                  tabIndex={isActive ? 0 : -1}
                  onMouseEnter={() => activate(index)}
                  onFocus={() => activate(index)}
                  onClick={() => activate(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className="flex h-full w-full flex-col justify-center gap-2 border-b border-border pl-[72px] text-left"
                >
                  <span
                    ref={(el) => {
                      nameRefs.current[index] = el;
                    }}
                    className={cn(
                      "text-[46px] leading-none font-semibold tracking-[-0.03em] whitespace-nowrap transition-colors duration-[250ms]",
                      isActive ? "text-text" : "text-border-strong",
                    )}
                  >
                    {item.name}
                  </span>
                  <span className="text-xs leading-4 font-medium tracking-[0.16em] text-text-3 uppercase">
                    {item.category}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Reveal delay={0.3}>
        <div role="tabpanel" id={PANEL_ID} aria-labelledby={tabId(project.slug)}>
          {/* Remonta a cada projeto: entra com fade e o carrossel volta para a 1ª imagem. */}
          <motion.div
            key={project.slug}
            initial={hasSwitched ? { opacity: 0, y: 8 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, ease: EASE_SOFT }}
            className="flex flex-col gap-[22px]"
          >
            <PortfolioCarousel
              images={project.images}
              projectName={project.name}
              variant="desktop"
              priority={active === 0}
            />
            <p className="m-0 max-w-[640px] text-[17px] leading-[1.65] text-text-2">
              {project.description}
            </p>
          </motion.div>
        </div>
      </Reveal>
    </div>
  );
}
