"use client";

import { PauseIcon, PlayIcon } from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { useI18n } from "@/components/i18n-provider";
import { dur, ease, Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

/**
 * Seção com o vídeo de apresentação (renderizado com HyperFrames).
 * Toca sem som e em loop só enquanto está visível; com "reduzir movimento"
 * ativo ele não inicia sozinho. O botão permite pausar/retomar a qualquer momento.
 */
export function IntroVideo() {
    const { t } = useI18n();
    const reduce = useReducedMotion();
    const ref = useRef<HTMLVideoElement>(null);
    const inView = useInView(ref, { amount: 0.4 });
    const [playing, setPlaying] = useState(false);
    // null = o usuário ainda não decidiu; true/false = escolha manual que prevalece
    const [userChoice, setUserChoice] = useState<boolean | null>(null);

    useEffect(() => {
        const v = ref.current;
        if (!v) return;
        const shouldPlay = inView && (userChoice ?? !reduce);
        if (shouldPlay) v.play().catch(() => {});
        else v.pause();
    }, [inView, userChoice, reduce]);

    function toggle() {
        setUserChoice(!playing);
    }

    return (
        <section
            id="video"
            className="border-t border-line py-20 sm:py-[104px]"
        >
            <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-4 sm:px-8 lg:gap-20">
                <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-4">
                    <motion.p
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: dur.base, ease: ease.out }}
                        className="font-mono text-[13px] text-brand-text"
                    >
                        {t.videoKicker}
                    </motion.p>
                    <Reveal delay={0.1}>
                        <h2 className="font-heading text-[34px] leading-[1.08] font-bold tracking-[-0.02em] text-head sm:text-[44px]">
                            {t.videoTitle}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="max-w-[460px] text-base leading-[1.65] text-muted-foreground">
                            {t.videoLead}
                        </p>
                    </Reveal>
                </div>

                <Reveal y={40} className="relative min-w-0 flex-[1_1_420px]">
                    <div className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-2xl border border-line2 bg-[#0c0d10] shadow-agent">
                        <video
                            ref={ref}
                            className="size-full object-cover"
                            src="/videos/apresentacao.mp4"
                            poster="/videos/apresentacao-poster.jpg"
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-label={t.videoLabel}
                            onPlay={() => setPlaying(true)}
                            onPause={() => setPlaying(false)}
                        />
                        <button
                            type="button"
                            onClick={toggle}
                            aria-label={playing ? t.videoPause : t.videoPlay}
                            className={cn(
                                "absolute right-4 bottom-4 flex size-11 items-center justify-center rounded-full border border-line3 bg-background/80 text-foreground backdrop-blur transition-[border-color,transform] hover:scale-105 hover:border-brand focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none motion-reduce:hover:scale-100",
                            )}
                        >
                            {playing ? (
                                <PauseIcon
                                    aria-hidden="true"
                                    className="size-[18px]"
                                />
                            ) : (
                                <PlayIcon
                                    aria-hidden="true"
                                    className="size-[18px] translate-x-px"
                                />
                            )}
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
