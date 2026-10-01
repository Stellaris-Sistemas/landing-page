import { Reveal } from "@/components/motion/Reveal";
import { SECTION_TITLE_LG_CLASSES, SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { PORTFOLIO_HEADER } from "@/lib/portfolio";
import { PortfolioMobileList } from "./PortfolioMobileList";
import { PortfolioShowcase } from "./PortfolioShowcase";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-titulo"
      className="bg-surface-1 py-20 lg:py-[120px]"
    >
      <div className="container-page flex flex-col gap-10 lg:gap-14">
        <Reveal>
          <SectionHeading
            id="portfolio-titulo"
            eyebrow={PORTFOLIO_HEADER.eyebrow}
            title={PORTFOLIO_HEADER.title}
            titleClassName={cn(SECTION_TITLE_LG_CLASSES, "lg:max-w-[640px]")}
          />
        </Reveal>

        {/* Desktop (lista + prévia) e mobile (empilhado): só uma aparece por vez. */}
        <div className="lg:mt-6">
          <PortfolioShowcase className="hidden lg:grid" />
          <PortfolioMobileList className="flex lg:hidden" />
        </div>
      </div>
    </section>
  );
}
