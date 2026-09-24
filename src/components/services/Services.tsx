import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_TITLE_LG_CLASSES, SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT_CTA, SECTIONS, SERVICES_CTA } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { ServiceCard } from "./ServiceCard";

const SERVICES_SECTION = SECTIONS.find((section) => section.id === "servicos")!;

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="bg-surface-1 py-20 lg:py-[120px]"
    >
      <div className="container-page flex flex-col gap-10 lg:gap-16">
        <Reveal>
          <SectionHeading
            id="servicos-titulo"
            eyebrow={SERVICES_SECTION.eyebrow}
            title={SERVICES_SECTION.title}
            titleClassName={SECTION_TITLE_LG_CLASSES}
          />
        </Reveal>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} as="li" delay={index * 0.08}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={<service.icon width={24} height={24} strokeWidth={1.75} />}
                index={index}
              />
            </Reveal>
          ))}
        </ul>

        <Reveal
          delay={0.48}
          className="flex flex-col items-center gap-2 text-center lg:flex-row lg:justify-center lg:gap-3"
        >
          <p className="text-[15px] text-text-2 lg:text-base">{SERVICES_CTA.text}</p>
          <a
            href={CONTACT_CTA.href}
            className="group inline-flex items-center gap-1 text-[15px] font-medium text-brand-light transition-colors duration-[0.25s] hover:text-glow lg:text-base"
          >
            {SERVICES_CTA.linkLabel}
            <ArrowRight
              aria-hidden="true"
              width={16}
              height={16}
              className="transition-transform duration-[0.25s] group-hover:translate-x-[3px]"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
