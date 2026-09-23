import { cn } from "@/lib/cn";
import { SITE } from "@/lib/constants";
import { StellarisStar } from "./StellarisStar";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

export function Logo({ className, onClick }: LogoProps) {
  return (
    <a
      href="#inicio"
      aria-label={`${SITE.name} — início`}
      onClick={onClick}
      className={cn("inline-flex items-center gap-3 rounded-md", className)}
    >
      <StellarisStar className="size-[22px] lg:size-[26px]" />
      <span className="font-display text-base leading-none font-medium tracking-wordmark whitespace-nowrap text-text lg:text-[19px]">
        {SITE.wordmark}
      </span>
    </a>
  );
}
