import { Mail } from "lucide-react";
import { contact } from "@/lib/contact";
import { SITE } from "@/lib/constants";
import { InstagramIcon } from "./InstagramIcon";

// flex: 1 1 auto + min-width: 0: lado a lado, os dois links preenchem
// exatamente a largura da linha divisória; se faltar espaço, o texto encolhe
// com reticências em vez de estourar a linha.
const LINK_CLASSES =
  "flex h-12 min-w-0 flex-[1_1_auto] items-center gap-2.5 rounded-btn border border-border bg-bg/60 px-3.5 no-underline transition-colors duration-200 hover:border-border-strong hover:bg-surface-1";

export function ContactLinks() {
  return (
    <div className="flex flex-col gap-3 border-t border-border pt-7 lg:flex-row">
      <a
        href={`mailto:${contact.email}`}
        aria-label={`Enviar e-mail para ${contact.email}`}
        className={LINK_CLASSES}
      >
        <Mail aria-hidden="true" size={16} className="shrink-0 text-text-2" />
        <span className="truncate text-sm text-text">{contact.email}</span>
      </a>

      <a
        href={contact.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Instagram da ${SITE.name}, abre em nova aba`}
        className={LINK_CLASSES}
      >
        <InstagramIcon size={16} className="shrink-0 text-text-2" />
        <span className="truncate text-sm text-text">@{contact.instagramHandle}</span>
      </a>
    </div>
  );
}
