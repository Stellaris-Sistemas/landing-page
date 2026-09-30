import { BeamButton } from "@/components/ui/BeamButton";
import { PORTFOLIO_CTA } from "@/lib/portfolio";
import { whatsappHref } from "@/lib/contact";

export function PortfolioCta() {
  return (
    <div className="relative overflow-hidden rounded-card border border-border bg-gradient-to-b from-surface-2/80 to-surface-1 p-8 text-center sm:p-10 lg:p-12">
      {/* Glow central */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-4">
        <h3 className="heading-display text-2xl font-semibold text-text sm:text-3xl lg:text-4xl">
          {PORTFOLIO_CTA.title}
        </h3>
        <p className="max-w-xl text-base leading-relaxed text-text-2 sm:text-[17px]">
          {PORTFOLIO_CTA.description}
        </p>

        <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <BeamButton href={whatsappHref(PORTFOLIO_CTA.whatsappMessage)}>
            {PORTFOLIO_CTA.buttonLabel}
          </BeamButton>
        </div>
      </div>
    </div>
  );
}
