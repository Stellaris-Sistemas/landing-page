"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Target } from "motion/react";

// Componentes motion pré-criados no escopo do módulo: motion.create()/motion(tag)
// chamado durante a renderização dispara "Components created during render"
// no eslint-plugin-react-hooks (regra alinhada ao React Compiler).
const MOTION_TAGS = {
  div: motion.div,
  li: motion.li,
  p: motion.p,
  span: motion.span,
  article: motion.article,
  section: motion.section,
} as const;

type RevealTag = keyof typeof MOTION_TAGS;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  as?: RevealTag;
  className?: string;
};

const HIDDEN: Target = { opacity: 0, y: 16 };
const VISIBLE: Target = { opacity: 1, y: 0 };

// Mesmo easing das entradas do hero (--ease-soft: cubic-bezier(.2,.7,.2,1)).
const EASE_SOFT = [0.2, 0.7, 0.2, 1] as const;

// Sempre o mesmo componente motion, com ou sem movimento reduzido: trocar por um
// elemento estático no cliente faria a hidratação manter o style="opacity:0" que
// veio do servidor, e o conteúdo ficaria invisível. O estado final com
// prefers-reduced-motion vem do CSS ([data-reveal] em globals.css), já no
// primeiro paint; aqui só zeramos a transição.
export function Reveal({ children, delay = 0, as = "div", className }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = MOTION_TAGS[as];

  return (
    <MotionTag
      data-reveal=""
      className={className}
      initial={HIDDEN}
      whileInView={VISIBLE}
      viewport={{ once: true, amount: 0.2 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.9, delay, ease: EASE_SOFT }}
    >
      {children}
    </MotionTag>
  );
}
