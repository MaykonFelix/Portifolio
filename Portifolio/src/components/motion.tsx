"use client";

import {
  motion,
  MotionConfig,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import { useRef } from "react";

/* Tokens de movimento: um só lugar para curvas e durações. */
export const ease = {
  out: [0.22, 1, 0.36, 1] as const, // entrada suave (expo-out)
  inOut: [0.65, 0, 0.35, 1] as const,
};
export const dur = { fast: 0.18, base: 0.5, slow: 0.8 };
export const spring = { type: "spring", stiffness: 380, damping: 30 } as const;

/** Respeita prefers-reduced-motion em todo o site (transforms viram instantâneos). */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

const viewport = { once: true, margin: "0px 0px -12% 0px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: dur.base, ease: ease.out } },
};

/** Revela o conteúdo quando entra na tela. */
export function Reveal({
  delay = 0,
  y = 24,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: dur.base, ease: ease.out, delay }}
      {...props}
    />
  );
}

/** Container que escalona a entrada dos filhos (`StaggerItem`). */
export function Stagger({
  as = "div",
  gap = 0.08,
  delay = 0,
  ...props
}: HTMLMotionProps<"div"> & { as?: "div" | "ol" | "ul"; gap?: number; delay?: number }) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
      {...props}
    />
  );
}

export function StaggerItem({
  as = "div",
  variants = fadeUp,
  ...props
}: HTMLMotionProps<"div"> & { as?: "div" | "li" }) {
  const Comp = motion[as] as typeof motion.div;
  return <Comp variants={variants} {...props} />;
}

/** Inclinação 3D leve que segue o ponteiro + brilho verde sob o cursor. */
export function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rx = useSpring(0, { stiffness: 200, damping: 20 });
  const ry = useSpring(0, { stiffness: 200, damping: 20 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, color-mix(in oklab, var(--color-brand) 14%, transparent), transparent 60%)`;

  function onMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    gx.set(px * 100);
    gy.set(py * 100);
    if (!reduce) {
      ry.set((px - 0.5) * 6);
      rx.set((0.5 - py) * 6);
    }
  }
  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={`group/tilt relative ${className ?? ""}`}
    >
      {children}
      <motion.div
        aria-hidden="true"
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
      />
    </motion.div>
  );
}

/** Botão/link "magnético": desloca alguns pixels em direção ao cursor. */
export function Magnetic({ children, strength = 0.25 }: { children: React.ReactNode; strength?: number }) {
  const reduce = useReducedMotion();
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);
  return (
    <motion.span
      className="inline-flex"
      style={{ x, y }}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}
