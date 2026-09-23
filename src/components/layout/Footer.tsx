import { Logo } from "@/components/brand/Logo";
import { SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-deep">
      <div className="container-page flex flex-col items-center justify-center gap-4 py-4 text-center lg:py-5">
        <div className="flex flex-col items-center gap-2">
          <Logo />
          <p className="text-sm leading-relaxed text-text-3">
            © {year} {SITE.name}. Todos os direitos reservados.
          </p>
        </div>

        {/* Reservado: CNPJ, e-mail, WhatsApp e redes sociais (próximas fases).
            empty:hidden evita que o gap acima "puxe" o conteúdo para cima
            enquanto este bloco ainda não tem conteúdo. */}
        <div data-slot="footer-contato" className="empty:hidden" />
      </div>
    </footer>
  );
}
