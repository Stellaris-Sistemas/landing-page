"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  // Elemento já renderizado (não a referência do componente): uma função
  // não pode atravessar a fronteira Server -> Client como prop.
  icon: ReactNode;
  index: number;
};

export function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  const ref = useRef<HTMLElement>(null);

  // Sem estado React: grava a posição do cursor direto no elemento via ref,
  // para não causar re-render a cada movimento do mouse.
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = ((event.clientX - rect.left) / rect.width) * 100;
    const my = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${mx}%`);
    el.style.setProperty("--my", `${my}%`);
  };

  return (
    <article
      ref={ref}
      onPointerMove={handlePointerMove}
      className="service-card flex h-full flex-col gap-4 rounded-card p-6 lg:p-8"
    >
      <div className="relative z-10 flex items-start justify-between">
        <div
          aria-hidden="true"
          className="service-card-icon flex size-12 items-center justify-center rounded-btn"
        >
          {icon}
        </div>
        <span
          aria-hidden="true"
          className="service-card-number text-[13px] font-medium tracking-[0.1em]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative z-10 mt-2 text-lg font-semibold tracking-[-0.01em] text-text lg:text-xl">
        {title}
      </h3>

      <p className="relative z-10 text-[15px] leading-[1.6] text-text-2">{description}</p>
    </article>
  );
}
