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

export function Reveal({ children, delay = 0, as = "div", className }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = MOTION_TAGS[as];

  if (shouldReduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <MotionTag
      className={className}
      initial={HIDDEN}
      whileInView={VISIBLE}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: EASE_SOFT }}
    >
      {children}
    </MotionTag>
  );
}
