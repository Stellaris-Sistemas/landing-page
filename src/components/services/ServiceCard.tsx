import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
};

export function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  return (
    <article className="service-card flex h-full flex-col gap-4 rounded-card p-6 lg:p-8">
      <div className="flex items-start justify-between">
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

      <h3 className="mt-2 text-lg font-semibold tracking-[-0.01em] text-text lg:text-xl">
        {title}
      </h3>

      <p className="text-[15px] leading-[1.6] text-text-2">{description}</p>
    </article>
  );
}
