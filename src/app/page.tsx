import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Hero } from "@/components/hero/Hero";
import { Process } from "@/components/process/Process";
import { Services } from "@/components/services/Services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTIONS } from "@/lib/constants";
import { cn } from "@/lib/cn";

export default function Home() {
  return (
    <>
      <Hero />
      {SECTIONS.map((section, index) =>
        section.id === "servicos" ? (
          <Services key={section.id} />
        ) : section.id === "processo" ? (
          <Process key={section.id} />
        ) : section.id === "sobre" ? (
          <About key={section.id} />
        ) : section.id === "contato" ? (
          <Contact key={section.id} />
        ) : (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-titulo`}
            className={cn("py-24 lg:py-32", index % 2 === 0 ? "bg-surface-1" : "bg-bg")}
          >
            <div className="container-page">
              <SectionHeading
                id={`${section.id}-titulo`}
                eyebrow={section.eyebrow}
                title={section.title}
              />
              <div className="mt-12 flex min-h-48 items-center justify-center rounded-btn border border-dashed border-border px-6 text-center text-sm text-text-3">
                Conteúdo em construção
              </div>
            </div>
          </section>
        ),
      )}
    </>
  );
}
