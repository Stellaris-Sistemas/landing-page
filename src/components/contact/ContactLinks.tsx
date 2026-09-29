"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { contact } from "@/lib/contact";
import { SITE } from "@/lib/constants";
import { InstagramIcon } from "./InstagramIcon";

// flex: 1 1 auto + min-width: 0: lado a lado, os dois links preenchem
// exatamente a largura da linha divisória; se faltar espaço, o texto encolhe
// com reticências em vez de estourar a linha.
const LINK_CLASSES =
  "flex h-12 min-w-0 flex-[1_1_auto] items-center gap-2.5 rounded-btn border border-border bg-bg/60 px-3.5 transition-colors duration-200 hover:border-border-strong hover:bg-surface-1";

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
          className="min-w-0 flex-1 truncate text-sm text-text no-underline"
        >
          {contact.email}
        </a>
        <button
          type="button"
          onClick={handleCopyEmail}
          aria-label={copied ? "E-mail copiado" : "Copiar e-mail"}
          className="-mr-1 flex shrink-0 items-center justify-center rounded-md p-1.5 text-text-2 transition-colors duration-200 hover:text-text"
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
        className={`${LINK_CLASSES} no-underline`}
      >
        <InstagramIcon size={16} className="shrink-0 text-text-2" />
        <span className="truncate text-sm text-text">@{contact.instagramHandle}</span>
      </a>
    </div>
  );
}
