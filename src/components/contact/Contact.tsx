import { Clock, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_TITLE_LG_CLASSES, SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { SECTIONS } from "@/lib/constants";
import { contact, whatsappHref } from "@/lib/contact";
import { ContactBeamButton } from "./ContactBeamButton";
import { ContactLinks } from "./ContactLinks";
import { ContactQrCard } from "./ContactQrCard";
import { ContactTrails } from "./ContactTrails";

const CONTACT_SECTION = SECTIONS.find((section) => section.id === "contato")!;

const INTRO = "Conte sobre o seu projeto e fale direto com a nossa equipe pelo WhatsApp.";

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="relative overflow-hidden bg-surface-1 py-20 lg:min-h-[760px] lg:py-[120px]"
    >
      {/* Mesma posição horizontal da estrela no hero (73,6%). Entre 1024 e ~1170px
          o centro recua para depois da coluna de conteúdo (80 + 620 + 32 + 130 =
          862px), para o card do QR não encostar nos links. */}
      <div className="pointer-events-none absolute top-[-120px] left-1/2 size-[560px] -translate-x-1/2 opacity-55 lg:top-1/2 lg:left-[max(73.6%,862px)] lg:size-[760px] lg:-translate-y-1/2 lg:opacity-100">
        <ContactTrails />
        <ContactQrCard className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex" />
      </div>

      <div className="relative z-10 container-page">
        <div className="flex flex-col gap-7 lg:min-h-[520px] lg:w-[620px] lg:justify-center lg:gap-9">
          <Reveal className="flex flex-col gap-5">
            <SectionHeading
              id="contato-titulo"
              eyebrow={CONTACT_SECTION.eyebrow}
              title={CONTACT_SECTION.title}
              titleClassName={cn(SECTION_TITLE_LG_CLASSES, "lg:max-w-[600px]")}
            />
            <p className="max-w-[520px] text-base leading-[1.6] text-text-2 lg:text-[17px]">
              {INTRO}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col items-stretch gap-4 lg:items-start">
            <ContactBeamButton
              href={whatsappHref()}
              icon={<MessageCircle aria-hidden="true" size={20} strokeWidth={1.9} />}
              className="w-full lg:w-auto"
            >
              Conversar no WhatsApp
            </ContactBeamButton>
            <p className="flex items-center gap-2 text-[13px] text-text-2 lg:text-sm">
              <Clock aria-hidden="true" size={16} className="shrink-0" />
              {contact.hours}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ContactLinks />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
