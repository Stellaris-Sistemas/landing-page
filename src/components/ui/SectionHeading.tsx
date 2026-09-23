type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({ id, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="flex max-w-[760px] flex-col gap-4">
      <p className="eyebrow text-[11px] lg:text-[13px]">{eyebrow}</p>
      <h2 id={id} className="heading-display text-[clamp(1.75rem,1.22rem+2.2vw,3rem)] text-text">
        {title}
      </h2>
    </div>
  );
}
