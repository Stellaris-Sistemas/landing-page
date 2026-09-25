import { Reveal } from "@/components/motion/Reveal";
import { SECTION_TITLE_LG_CLASSES, SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { SECTIONS } from "@/lib/constants";
import { ProcessTimeline } from "./ProcessTimeline";

const PROCESS_SECTION = SECTIONS.find((section) => section.id === "processo")!;

export function Process() {
  return (
    <section
      id="processo"
      aria-labelledby="processo-titulo"
      className="bg-bg pt-20 pb-14 lg:pt-[120px] lg:pb-20"
    >
      <div className="container-page flex flex-col gap-8 lg:gap-12">
        <Reveal>
          <SectionHeading
            id="processo-titulo"
            eyebrow={PROCESS_SECTION.eyebrow}
            title={PROCESS_SECTION.title}
            titleClassName={cn(SECTION_TITLE_LG_CLASSES, "lg:max-w-[680px]")}
          />
        </Reveal>

        <ProcessTimeline />
      </div>
    </section>
  );
}
