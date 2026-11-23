"use client";

import { CheckIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { useI18n } from "@/components/i18n-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ChatState = {
    q: number;
    /** 0–2: etapas do pipeline; 3: resposta */
    phase: number;
    /** caracteres já "transmitidos" */
    n: number;
    streaming: boolean;
};

const FULL: ChatState = {
    q: 0,
    phase: 3,
    n: Number.POSITIVE_INFINITY,
    streaming: false,
};

// A demonstração automática roda só uma vez por carregamento da página.
let hasAutoplayed = false;

/**
 * Simulação de um agente RAG respondendo perguntas sobre o currículo.
 * Montado com `key={lang}` pelo pai, então trocar o idioma reinicia o estado.
 */
export function AgentChat() {
    const { t } = useI18n();
    const [state, setState] = useState<ChatState>(FULL);
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
    const interval = useRef<ReturnType<typeof setInterval> | null>(null);

    const clearTimers = useCallback(() => {
        timers.current.forEach(clearTimeout);
        timers.current = [];
        if (interval.current) clearInterval(interval.current);
        interval.current = null;
    }, []);

    const pick = useCallback(
        (i: number) => {
            clearTimers();
            const total = t.qa[i].a.length;
            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;
            if (reduceMotion) {
                setState({ q: i, phase: 3, n: total, streaming: false });
                return;
            }
            setState({ q: i, phase: 0, n: 0, streaming: true });
            timers.current.push(
                setTimeout(() => setState((s) => ({ ...s, phase: 1 })), 320),
            );
            timers.current.push(
                setTimeout(() => setState((s) => ({ ...s, phase: 2 })), 680),
            );
            timers.current.push(
                setTimeout(() => {
                    setState((s) => ({ ...s, phase: 3, n: 0 }));
                    interval.current = setInterval(() => {
                        setState((s) => {
                            const next = s.n + 3;
                            if (next >= total) {
                                if (interval.current)
                                    clearInterval(interval.current);
                                interval.current = null;
                                return { ...s, n: total, streaming: false };
                            }
                            return { ...s, n: next };
                        });
                    }, 16);
                }, 1040),
            );
        },
        [clearTimers, t],
    );

    useEffect(() => {
        if (!hasAutoplayed) {
            hasAutoplayed = true;
            timers.current.push(setTimeout(() => pick(0), 900));
        }
        return clearTimers;
    }, [pick, clearTimers]);

    const current = t.qa[state.q];
    const shown = current.a.slice(0, Math.min(state.n, current.a.length));
    const thinking = state.phase < 3;
    const showSources = state.phase >= 3 && !state.streaming;

    return (
        <Card
            id="agente"
            className="w-full min-w-0 flex-1 gap-0 rounded-2xl border border-line2 py-0 shadow-agent ring-0"
        >
            <div className="flex items-center justify-between gap-3 border-b border-line2 px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                    <Image
                        src="/images/avatar.png"
                        alt=""
                        width={28}
                        height={28}
                        className="size-7 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-foreground">
                            maykon-agent
                        </span>
                        <span className="font-mono text-[11.5px] text-dim">
                            {t.agentSub}
                        </span>
                    </div>
                </div>
                <Badge
                    variant="outline"
                    className="h-auto border-line3 px-2.5 py-1 font-mono text-[11.5px] font-normal text-muted-foreground"
                >
                    v2026
                </Badge>
            </div>

            <div className="flex min-h-[360px] flex-col gap-[18px] px-[22px] pt-[22px] pb-2">
                <motion.div
                    key={`q-${state.q}`}
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 420, damping: 30 }}
                    className="max-w-[80%] origin-bottom-right self-end rounded-[14px_14px_4px_14px] bg-bubble px-4 py-[11px] text-[15px] text-foreground"
                >
                    {current.q}
                </motion.div>

                <ol className="flex flex-col gap-[7px] rounded-[10px] border border-line bg-inset px-3.5 py-3">
                    {t.steps.map((label, i) => {
                        const done = state.phase > i;
                        const active = state.streaming && state.phase === i;
                        return (
                            <li
                                key={label}
                                className={cn(
                                    "flex items-center gap-2.5 font-mono text-[12.5px] transition-colors duration-300",
                                    done
                                        ? "text-soft"
                                        : active
                                          ? "text-foreground"
                                          : "text-dim",
                                )}
                            >
                                <span
                                    aria-hidden="true"
                                    className="relative flex size-3.5 items-center justify-center"
                                >
                                    <AnimatePresence
                                        initial={false}
                                        mode="popLayout"
                                    >
                                        {done ? (
                                            <motion.span
                                                key="done"
                                                initial={{
                                                    scale: 0,
                                                    rotate: -45,
                                                }}
                                                animate={{
                                                    scale: 1,
                                                    rotate: 0,
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 600,
                                                    damping: 20,
                                                }}
                                            >
                                                <CheckIcon
                                                    className="size-3.5 text-brand-text"
                                                    strokeWidth={3}
                                                />
                                            </motion.span>
                                        ) : (
                                            <motion.span
                                                key="todo"
                                                exit={{
                                                    scale: 0,
                                                    opacity: 0,
                                                    transition: {
                                                        duration: 0.12,
                                                    },
                                                }}
                                                animate={
                                                    active
                                                        ? {
                                                              scale: [
                                                                  1, 1.35, 1,
                                                              ],
                                                          }
                                                        : { scale: 1 }
                                                }
                                                transition={
                                                    active
                                                        ? {
                                                              duration: 0.6,
                                                              repeat: Infinity,
                                                          }
                                                        : undefined
                                                }
                                                className={cn(
                                                    "size-2.5 rounded-full border-[1.5px]",
                                                    active
                                                        ? "border-brand bg-brand/30"
                                                        : "border-line3",
                                                )}
                                            />
                                        )}
                                    </AnimatePresence>
                                </span>
                                <span>{label}</span>
                            </li>
                        );
                    })}
                </ol>

                <div aria-live="polite" className="flex items-start gap-3">
                    <span
                        aria-hidden="true"
                        className="flex size-7 flex-none items-center justify-center rounded-lg bg-brand font-mono text-[11px] font-medium text-brand-ink"
                    >
                        MF
                    </span>
                    <div className="flex min-w-0 flex-1 flex-col gap-3.5">
                        {thinking ? (
                            <p className="mt-1 flex items-center gap-1.5 font-mono text-[13px] text-dim">
                                {t.thinking}
                                <span aria-hidden="true" className="flex gap-1">
                                    {[0, 1, 2].map((d) => (
                                        <motion.span
                                            key={d}
                                            className="size-1 rounded-full bg-brand-text"
                                            animate={{
                                                opacity: [0.2, 1, 0.2],
                                                y: [0, -2, 0],
                                            }}
                                            transition={{
                                                duration: 0.9,
                                                repeat: Infinity,
                                                delay: d * 0.15,
                                            }}
                                        />
                                    ))}
                                </span>
                            </p>
                        ) : (
                            <p className="mt-[3px] text-[15.5px] leading-[1.65] text-foreground">
                                {shown}
                                {state.streaming && (
                                    <span
                                        aria-hidden="true"
                                        className="animate-blink text-brand-text"
                                    >
                                        ▍
                                    </span>
                                )}
                            </p>
                        )}
                        {showSources && (
                            <motion.div
                                key={`src-${state.q}`}
                                initial="hidden"
                                animate="show"
                                variants={{
                                    show: {
                                        transition: { staggerChildren: 0.06 },
                                    },
                                }}
                                className="flex flex-wrap items-center gap-2"
                            >
                                <motion.span
                                    variants={{
                                        hidden: { opacity: 0 },
                                        show: { opacity: 1 },
                                    }}
                                    className="font-mono text-[11.5px] text-dim"
                                >
                                    {t.sources}
                                </motion.span>
                                {current.src.map((src) => (
                                    <motion.span
                                        key={src}
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                y: 6,
                                                scale: 0.9,
                                            },
                                            show: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 26,
                                                },
                                            },
                                        }}
                                    >
                                        <Badge
                                            variant="outline"
                                            className="h-auto rounded-md border-line3 bg-chip px-[9px] py-1 font-mono text-[11.5px] font-normal text-soft"
                                        >
                                            {src}
                                        </Badge>
                                    </motion.span>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-line2 px-[22px] pt-4 pb-[22px]">
                <span className="font-mono text-[11.5px] text-dim">
                    {t.chooseQ}
                </span>
                <div className="flex flex-wrap gap-2">
                    {t.qa.map((item, i) => {
                        const on = i === state.q;
                        return (
                            <Button
                                key={item.q}
                                variant="outline"
                                aria-pressed={on}
                                onClick={() => pick(i)}
                                className={cn(
                                    "relative isolate h-auto rounded-full px-3.5 py-[9px] text-[13.5px] font-medium whitespace-normal transition-colors active:scale-[0.97]",
                                    on
                                        ? "border-brand bg-transparent text-brand-ink hover:bg-transparent hover:text-brand-ink dark:border-brand dark:bg-transparent dark:hover:bg-transparent"
                                        : "border-line3 bg-transparent text-foreground hover:border-brand hover:bg-transparent dark:border-line3 dark:bg-transparent dark:hover:bg-transparent",
                                )}
                            >
                                {on && (
                                    <motion.span
                                        layoutId="agent-q-pill"
                                        aria-hidden="true"
                                        className="absolute inset-0 -z-10 rounded-full bg-brand"
                                        transition={{
                                            type: "spring",
                                            stiffness: 420,
                                            damping: 34,
                                        }}
                                    />
                                )}
                                {item.q}
                            </Button>
                        );
                    })}
                </div>
            </div>
        </Card>
    );
}
