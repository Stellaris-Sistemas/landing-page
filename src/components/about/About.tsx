import { Reveal } from "@/components/motion/Reveal";
import { ABOUT } from "@/lib/about";
import styles from "./about.module.css";
import { AboutDivider } from "./AboutDivider";
import { AboutHeading } from "./AboutHeading";
import { PrincipleStar } from "./PrincipleStar";

const COLUMN_LABEL = "m-0 text-xs font-medium tracking-[0.2em] text-text-2 uppercase";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="bg-bg py-20 lg:py-[120px]">
      <div className="container-page flex flex-col gap-10 lg:gap-[72px]">
        <Reveal>
          <AboutHeading id="sobre-titulo" eyebrow={ABOUT.eyebrow} title={ABOUT.title} />
        </Reveal>

        {/* Desktop: apresentação | divisória | princípios. A coluna da esquerda
            se distribui (space-between) na altura da lista de princípios. */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_2px_minmax(0,1fr)] lg:items-stretch lg:gap-x-20 lg:gap-y-0">
          <Reveal delay={0.1} className="flex flex-col gap-6 lg:h-full lg:justify-between">
            <p className={COLUMN_LABEL}>{ABOUT.intro.label}</p>
            <p className="m-0 text-base leading-[1.65] font-medium tracking-[-0.01em] text-text lg:text-[17px]">
              {ABOUT.intro.highlight}
            </p>
            {ABOUT.intro.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="m-0 text-base leading-[1.65] text-text-2 lg:text-[17px]"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <AboutDivider />

          {/* A lista também se distribui na altura da linha (32px vira o mínimo
              entre princípios): topo e base alinham com a coluna da esquerda em
              qualquer largura, seja qual for a coluna mais alta. */}
          <div className="flex flex-col gap-6">
            <Reveal as="p" delay={0.1} className={COLUMN_LABEL}>
              {ABOUT.principles.label}
            </Reveal>
            <ul className="m-0 flex list-none flex-col gap-7 p-0 lg:flex-1 lg:justify-between lg:gap-8">
              {ABOUT.principles.items.map((principle, index) => (
                <Reveal
                  key={principle.title}
                  as="li"
                  delay={0.2 + index * 0.1}
                  className={`${styles.principle} flex items-start gap-4`}
                >
                  <PrincipleStar className={`${styles.star} mt-[3px] shrink-0`} />
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-text lg:text-lg">
                      {principle.title}
                    </h3>
                    <p className="m-0 text-[15px] leading-[1.6] text-text-2">
                      {principle.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
