"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import buttonStyles from "@/components/ui/button.module.css";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/constants";
import { contact } from "@/lib/contact";
import { InstagramIcon } from "./InstagramIcon";

// Mesma pílula de vidro do header (button.module.css). flex-1 só a partir de
// lg: nessa direção (row) ele divide a largura em partes iguais; em flex-col
// (abaixo de lg) flex-1 também valeria para a ALTURA (o eixo principal muda
// de direção), esmagando/esticando os dois cartões de forma desigual.
const LINK_CLASSES = cn(
  buttonStyles.glass,
  buttonStyles.glassWide,
  "flex h-11 w-full min-w-0 items-center gap-2.5 rounded-full px-4 text-sm text-text no-underline lg:w-auto lg:flex-1",
);

const COPY_RESET_DELAY_MS = 2000;

export function ContactLinks() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), COPY_RESET_DELAY_MS);
    } catch {
      // Clipboard indisponível (ex.: contexto não seguro); o link mailto continua funcionando.
    }
  };

  return (
    <div className="flex flex-col gap-3 border-t border-border pt-7 lg:flex-row">
      {/* A caixa não é mais um único <a>: o botão de copiar precisa ficar fora
          do link (um <button> não pode ficar dentro de um <a>). */}
      <div className={LINK_CLASSES}>
        <Mail aria-hidden="true" size={16} className="shrink-0 text-text-2" />
        <a
          href={`mailto:${contact.email}`}
          className="min-w-0 flex-1 truncate text-text no-underline"
        >
          {contact.email}
        </a>
        <button
          type="button"
          onClick={handleCopyEmail}
          aria-label={copied ? "E-mail copiado" : "Copiar e-mail"}
          className="-mr-1.5 flex size-8 shrink-0 items-center justify-center rounded-full text-text-2 transition-colors duration-200 hover:bg-surface-2 hover:text-text"
        >
          {copied ? (
            <Check aria-hidden="true" size={16} className="text-brand-light" />
          ) : (
            <Copy aria-hidden="true" size={16} />
          )}
        </button>
      </div>

      <a
        href={contact.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Instagram da ${SITE.name}, abre em nova aba`}
        className={LINK_CLASSES}
      >
        <InstagramIcon size={16} className="shrink-0 text-text-2" />
        <span className="truncate text-text">@{contact.instagramHandle}</span>
      </a>
    </div>
  );
}
