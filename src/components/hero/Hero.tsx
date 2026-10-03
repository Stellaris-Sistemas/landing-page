import type { CSSProperties } from "react";
import { BeamButton } from "@/components/ui/BeamButton";
import { Button } from "@/components/ui/Button";
import { CONTACT_CTA, HERO } from "@/lib/constants";
import { StarTrails } from "./StarTrails";

const delay = (seconds: number) => ({ "--delay": `${seconds}s` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="hero relative isolate flex overflow-hidden bg-bg"
    >
      <div aria-hidden="true" className="hero-visual pointer-events-none -z-10">
        <StarTrails />
      </div>

      <div className="container-page flex flex-col justify-end gap-5 pb-8 lg:justify-center lg:gap-7 lg:py-16">
        <h1
          id="inicio-titulo"
          className="hero-item heading-display max-w-[680px] text-[clamp(2.25rem,1.507rem+3.048vw,4.25rem)] text-text"
          style={delay(0.1)}
        >
          {HERO.title}
        </h1>

        <p
          className="hero-item max-w-[540px] text-base leading-[1.6] text-text-2 lg:text-lg lg:leading-[1.55]"
          style={delay(0.2)}
        >
          <span className="lg:hidden">{HERO.description.mobile}</span>
          <span className="hidden lg:inline">{HERO.description.desktop}</span>
        </p>

        <div
          className="hero-item flex max-w-[540px] flex-col gap-4 lg:mt-3 lg:max-w-none lg:flex-row"
          style={delay(0.32)}
        >
          <Button href={HERO.secondaryCta.href} variant="ghost" className="w-full lg:w-auto">
            {HERO.secondaryCta.label}
          </Button>
          <BeamButton href={CONTACT_CTA.href} className="w-full lg:w-auto">
            {CONTACT_CTA.label}
          </BeamButton>
        </div>
      </div>
    </section>
  );
}
