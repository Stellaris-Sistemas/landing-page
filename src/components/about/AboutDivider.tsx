"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import styles from "./about.module.css";

const EASE_SOFT = [0.2, 0.7, 0.2, 1] as const;

// Duas divisórias: vertical no desktop (se desenha de cima para baixo) e
// horizontal no mobile (da esquerda para a direita); só uma aparece por vez.
// O invólucro, sem escala, é o que se observa: o traço interno começa com
// tamanho zero, e observar um elemento encolhido a zero não é confiável.
// data-reveal reaproveita a regra global que, com prefers-reduced-motion,
// mostra tudo no estado final (já desenhado).
export function AboutDivider() {
  const shouldReduceMotion = useReducedMotion();
  const xRef = useRef<HTMLDivElement>(null);
  const yRef = useRef<HTMLDivElement>(null);
  const xInView = useInView(xRef, { once: true, amount: 0.5 });
  const yInView = useInView(yRef, { once: true, amount: 0.3 });
  const transition = shouldReduceMotion ? { duration: 0 } : { duration: 1.2, ease: EASE_SOFT };

  return (
    <>
      <div ref={xRef} aria-hidden="true" className="h-0.5 w-full lg:hidden">
        <motion.div
          data-reveal=""
          initial={{ scaleX: 0 }}
          animate={{ scaleX: xInView ? 1 : 0 }}
          transition={transition}
          className={`${styles.dividerX} size-full origin-left rounded-[2px]`}
        />
      </div>
      <div ref={yRef} aria-hidden="true" className="hidden w-0.5 self-stretch lg:block">
        <motion.div
          data-reveal=""
          initial={{ scaleY: 0 }}
          animate={{ scaleY: yInView ? 1 : 0 }}
          transition={transition}
          className={`${styles.dividerY} size-full origin-top rounded-[2px]`}
        />
      </div>
    </>
  );
}
