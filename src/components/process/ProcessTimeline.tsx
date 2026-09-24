"use client";

import { useRef, useSyncExternalStore } from "react";
import { useInView } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { PROCESS_STEPS } from "@/lib/process";

const DESKTOP_QUERY = "(min-width: 1024px)";

function subscribeToDesktop(onChange: () => void) {
  const mq = window.matchMedia(DESKTOP_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

// Desktop: etapas em sequência acompanhando o desenho da linha.
// Mobile: cada etapa entra sozinha quando chega à tela.
const stepDelay = (index: number, isDesktop: boolean) => (isDesktop ? 0.3 + index * 0.15 : 0);

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const isDesktop = useSyncExternalStore(
    subscribeToDesktop,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false,
  );

  return (
    <div ref={ref} data-inview={inView} className="process-timeline relative">
      {/* Desktop: linha horizontal no meio (y = 320px) com feixe e seta. */}
      <div
        aria-hidden="true"
        className="absolute top-[317px] right-[14px] left-0 hidden h-1.5 overflow-hidden lg:block"
      >
        <div className="process-line process-line-x absolute inset-x-0 top-0.5 h-0.5" />
        <div className="process-beam-track-x absolute inset-0">
          <div className="process-beam process-beam-x absolute top-0 right-0" />
        </div>
      </div>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 20 20"
        width="20"
        height="20"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="process-arrow absolute top-[310px] right-0 hidden stroke-brand-light lg:block"
      >
        <path d="M4 3 L14 10 L4 17" />
      </svg>

      {/* Mobile/tablet: linha vertical no eixo dos círculos (x = 24px). */}
      <div
        aria-hidden="true"
        className="absolute top-6 bottom-[30px] left-[21px] w-1.5 overflow-hidden lg:hidden"
      >
        <div className="process-line process-line-y absolute inset-y-0 left-0.5 w-0.5" />
        <div className="process-beam-track-y absolute inset-0">
          <div className="process-beam process-beam-y absolute bottom-0 left-0" />
        </div>
      </div>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 20 20"
        width="20"
        height="20"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="process-arrow absolute bottom-3 left-3.5 stroke-brand-light lg:hidden"
      >
        <path d="M3 4 L10 14 L17 4" />
      </svg>

      <ol
        role="list"
        className="relative flex list-none flex-col gap-9 pb-14 lg:grid lg:h-[640px] lg:grid-cols-5 lg:gap-0 lg:pb-0"
      >
        {PROCESS_STEPS.map((step, index) => {
          const above = index % 2 === 0;
          return (
            <Reveal
              key={step.id}
              as="li"
              delay={stepDelay(index, isDesktop)}
              className="relative flex items-start gap-5 lg:block lg:h-full"
            >
              <span
                aria-hidden="true"
                className="process-node flex size-12 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold tracking-[0.05em] lg:absolute lg:top-[296px] lg:left-1/2 lg:-translate-x-1/2"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                aria-hidden="true"
                className={cn(
                  "process-tick absolute left-1/2 hidden h-9 w-px -translate-x-1/2 lg:block",
                  above ? "top-[256px]" : "top-[348px]",
                )}
              />

              {/* Largura limitada para blocos do mesmo lado nunca se tocarem (>= 32px). */}
              <div
                className={cn(
                  "flex flex-col gap-2 pt-3 lg:absolute lg:left-1/2 lg:w-[min(300px,calc(200%-32px))] lg:-translate-x-1/2 lg:gap-2.5 lg:pt-0 lg:text-center",
                  above ? "lg:bottom-[428px]" : "lg:top-[388px]",
                )}
              >
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-text lg:text-xl">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-text-2">{step.description}</p>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}
