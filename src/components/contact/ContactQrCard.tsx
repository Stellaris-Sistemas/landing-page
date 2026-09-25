"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/cn";

// Entra só com fade (o Reveal também desloca 16px para cima). data-reveal
// reaproveita a regra global que já mostra o conteúdo no estado final com
// prefers-reduced-motion.
export function ContactQrCard({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      data-reveal=""
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }
      }
      className={cn(
        "w-[260px] flex-col items-center gap-4 rounded-[20px] border border-border bg-bg/78 p-6 text-center",
        className,
      )}
    >
      {/* Fundo claro obrigatório para a câmera ler o código: não inverter. */}
      <div className="rounded-[14px] bg-text p-[18px]">
        <Image
          src="/contact/whatsapp-qr.svg"
          alt={`QR code para abrir o WhatsApp da ${SITE.name}`}
          width={176}
          height={176}
          unoptimized
          className="block size-44"
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-[15px] font-semibold text-text">Escaneie o código QR</p>
        <p className="text-[13px] leading-[1.5] text-text-2">
          Aponte a câmera para o código e continue a conversa no WhatsApp.
        </p>
      </div>
    </motion.div>
  );
}
