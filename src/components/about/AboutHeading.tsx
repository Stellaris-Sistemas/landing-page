import { SECTION_TITLE_LG_CLASSES } from "@/components/ui/SectionHeading";

// Mesma marcação e classes do SectionHeading, que limita o bloco a 760px num
// elemento interno sem className; aqui o título precisa de até 900px para
// quebrar em duas linhas equilibradas.
export function AboutHeading({
  id,
  eyebrow,
  title,
}: {
  id: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-4 lg:max-w-[900px]">
      <p className="eyebrow text-[11px] lg:text-[13px]">{eyebrow}</p>
      <h2 id={id} className={SECTION_TITLE_LG_CLASSES}>
        {title}
      </h2>
    </div>
  );
}
