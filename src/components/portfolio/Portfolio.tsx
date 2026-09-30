import { Reveal } from "@/components/motion/Reveal";
import { SECTION_TITLE_LG_CLASSES, SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_HEADER, PORTFOLIO_PROJECTS } from "@/lib/portfolio";
import { ProjectCard } from "./ProjectCard";
import { PortfolioCta } from "./PortfolioCta";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-titulo"
      className="bg-surface-1 py-20 lg:py-[120px]"
    >
      <div className="container-page flex flex-col gap-12 lg:gap-16">
        <Reveal>
          <SectionHeading
            id="portfolio-titulo"
            eyebrow={PORTFOLIO_HEADER.eyebrow}
            title={PORTFOLIO_HEADER.title}
            aside={PORTFOLIO_HEADER.subtitle}
            titleClassName={SECTION_TITLE_LG_CLASSES}
          />
        </Reveal>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <Reveal key={project.id} as="li" delay={index * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.3}>
          <PortfolioCta />
        </Reveal>
      </div>
    </section>
  );
}
