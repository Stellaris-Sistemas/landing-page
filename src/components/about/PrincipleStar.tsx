import { STAR_PATH } from "@/components/brand/StellarisStar";

// O StellarisStar tem a cor fixa (#0052B4), com contraste insuficiente neste
// tamanho sobre o fundo escuro; esta versão usa currentColor com o mesmo desenho.
export function PrincipleStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-120 -120 240 240"
      width={18}
      height={18}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d={STAR_PATH} />
    </svg>
  );
}
