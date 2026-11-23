"use client";

import { ArrowRightIcon, MailIcon } from "lucide-react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react";
import { useRef } from "react";

import { AgentChat } from "@/components/agent-chat";
import { useI18n } from "@/components/i18n-provider";
import { ProjectCard, type Project } from "@/components/project-card";
import { CONTACT_EMAIL } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    dur,
    ease,
    Magnetic,
    Reveal,
    Stagger,
    StaggerItem,
    TiltCard,
} from "@/components/motion";
import { cn } from "@/lib/utils";

const container = "mx-auto max-w-[1200px] px-4 sm:px-8";

const ctaPrimary = cn(
    buttonVariants(),
    "h-auto rounded-[10px] px-6 py-[15px] text-[15px] font-semibold text-brand-ink transition-transform hover:-translate-y-0.5 hover:bg-brand motion-reduce:hover:translate-y-0",
);

const ctaGhost = cn(
    buttonVariants({ variant: "outline" }),
    "h-auto rounded-[10px] border-line3 bg-transparent px-6 py-[15px] text-[15px] font-medium text-foreground transition-transform hover:-translate-y-0.5 hover:border-brand hover:bg-transparent hover:text-brand-text motion-reduce:hover:translate-y-0 dark:border-line3 dark:bg-transparent dark:hover:bg-transparent",
);

const hoverCard =
    "transition-[border-color,transform] duration-250 hover:-translate-y-[3px] hover:border-brand motion-reduce:hover:translate-y-0";

function Kicker({ children }: { children: React.ReactNode }) {
    return (
        <motion.p
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: dur.base, ease: ease.out }}
            className="font-mono text-[13px] text-brand-text"
        >
            <Typed text={children} />
        </motion.p>
    );
}

/** Efeito de terminal: o texto do kicker é "digitado" ao entrar na tela. */
function Typed({ text }: { text: React.ReactNode }) {
    if (typeof text !== "string") return <>{text}</>;
    return (
        <motion.span
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
                show: {
                    transition: { staggerChildren: 0.022, delayChildren: 0.15 },
                },
            }}
            aria-label={text}
        >
            {Array.from(text).map((ch, i) => (
                <motion.span
                    key={i}
                    aria-hidden="true"
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { duration: 0.01 } },
                    }}
                >
                    {ch}
                </motion.span>
            ))}
        </motion.span>
    );
}

function H2({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: dur.slow, ease: ease.out, delay: 0.1 }}
            className={cn(
                "font-heading text-[34px] leading-[1.08] font-bold tracking-[-0.02em] text-head sm:text-[44px]",
                className,
            )}
        >
            {children}
        </motion.h2>
    );
}

function Label({
    children,
    brand,
}: {
    children: React.ReactNode;
    brand?: boolean;
}) {
    return (
        <span
            className={cn(
                "font-mono text-xs tracking-[1.5px]",
                brand ? "text-brand-text" : "text-muted-foreground",
            )}
        >
            {children}
        </span>
    );
}

/* ------------------------------------------------------------------ */

/** Palavras do título entram uma a uma, saindo do desfoque. */
function Words({
    text,
    className,
    start = 0,
}: {
    text: string;
    className?: string;
    start?: number;
}) {
    return (
        <>
            {text.split(" ").map((w, i) => (
                <motion.span
                    key={`${w}-${i}`}
                    className={cn("inline-block", className)}
                    initial={{ opacity: 0, y: "0.4em", filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                        duration: 0.7,
                        ease: ease.out,
                        delay: 0.15 + (start + i) * 0.07,
                    }}
                >
                    {w}&nbsp;
                </motion.span>
            ))}
        </>
    );
}

const heroItem = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: dur.base, ease: ease.out, delay },
});

export function Hero() {
    const { t, lang } = useI18n();
    const reduce = useReducedMotion();
    const mx = useMotionValue(-1000);
    const my = useMotionValue(-1000);
    const spotlight = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, black, transparent 70%)`;
    const a = t.h1a.split(" ").length;
    const b = t.h1b.split(" ").length;

    return (
        <section
            id="topo"
            onPointerMove={(e) => {
                if (reduce || e.pointerType !== "mouse") return;
                const r = e.currentTarget.getBoundingClientRect();
                mx.set(e.clientX - r.left);
                my.set(e.clientY - r.top);
            }}
            onPointerLeave={() => {
                mx.set(-1000);
                my.set(-1000);
            }}
            className="relative overflow-hidden bg-background bg-[radial-gradient(var(--dot)_1px,transparent_1px)] bg-size-[26px_26px] pt-16 pb-20 sm:pt-24 sm:pb-[104px]"
        >
            {/* Lanterna: acende a grade de pontos em verde sob o cursor. */}
            <motion.div
                aria-hidden="true"
                style={{ maskImage: spotlight, WebkitMaskImage: spotlight }}
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--color-brand)_1.4px,transparent_1.4px)] bg-size-[26px_26px] opacity-70"
            />
            <div
                className={cn(
                    container,
                    "relative flex flex-wrap items-center gap-14",
                )}
            >
                <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-7">
                    <motion.p
                        {...heroItem(0)}
                        className="flex items-center gap-2.5 font-mono text-[13px] text-muted-foreground"
                    >
                        <span
                            aria-hidden="true"
                            className="size-2 animate-live rounded-full bg-live motion-reduce:animate-none"
                        />
                        {t.status}
                    </motion.p>
                    <h1
                        key={lang}
                        aria-label={`${t.h1a} ${t.h1b} ${t.h1c}`}
                        className="font-heading text-[44px] leading-[1.02] font-bold tracking-[-0.025em] text-head sm:text-[64px]"
                    >
                        <span aria-hidden="true">
                            <Words text={t.h1a} />
                            <Words
                                text={t.h1b}
                                start={a}
                                className="text-brand-text"
                            />
                            <Words text={t.h1c} start={a + b} />
                        </span>
                    </h1>
                    <motion.p
                        {...heroItem(0.55)}
                        className="max-w-[540px] text-lg leading-[1.65] text-muted-foreground"
                    >
                        {t.heroP}
                    </motion.p>
                    <motion.div
                        {...heroItem(0.7)}
                        className="mt-1.5 flex flex-wrap gap-3.5"
                    >
                        <Magnetic>
                            <a href="#agente" className={ctaPrimary}>
                                {t.btnAsk}
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#trajetoria" className={ctaGhost}>
                                {t.btnPath}
                            </a>
                        </Magnetic>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={{
                            show: {
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.85,
                                },
                            },
                        }}
                        className="mt-[18px] flex flex-wrap gap-x-7 gap-y-2 font-mono text-[13px] text-dim"
                    >
                        {[
                            "Next.js · React · Node.js",
                            "LLM · RAG · Agents",
                            "AWS · Azure · Docker",
                        ].map((s) => (
                            <motion.span
                                key={s}
                                variants={{
                                    hidden: { opacity: 0, y: 8 },
                                    show: { opacity: 1, y: 0 },
                                }}
                            >
                                {s}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: dur.slow,
                        ease: ease.out,
                        delay: 0.35,
                    }}
                    className="flex min-w-0 flex-[1_1_480px]"
                >
                    <AgentChat key={lang} />
                </motion.div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */

export function Pipeline() {
    const { t } = useI18n();
    const ref = useRef<HTMLDivElement>(null);
    // A linha de "dados" atravessa as etapas conforme a seção rola.
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 85%", "end 45%"],
    });
    const flow = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
    const dotLeft = useTransform(flow, (v) => `${v * 100}%`);
    const steps = [
        [t.p1t, t.p1d],
        [t.p2t, t.p2d],
        [t.p3t, t.p3d],
        [t.p4t, t.p4d],
        [t.p5t, t.p5d],
    ];

    return (
        <section
            id="pipeline"
            className="border-t border-line py-20 sm:py-[104px]"
        >
            <div className={cn(container, "flex flex-col gap-12")}>
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div className="flex max-w-[640px] flex-col gap-3.5">
                        <Kicker>{t.pipeKicker}</Kicker>
                        <H2>{t.pipeTitle}</H2>
                    </div>
                    <p className="max-w-[400px] text-base leading-[1.65] text-muted-foreground">
                        {t.pipeLead}
                    </p>
                </div>

                <div ref={ref}>
                    <Stagger
                        as="ol"
                        gap={0.12}
                        className="relative grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-5"
                    >
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 -top-6 hidden h-px bg-line2 lg:block"
                        >
                            <motion.div
                                style={{ scaleX: flow }}
                                className="h-full origin-left bg-brand"
                            />
                            <motion.span
                                style={{ left: dotLeft }}
                                className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_14px_var(--color-brand)]"
                            />
                        </div>
                        {steps.map(([title, desc], i) => {
                            const last = i === steps.length - 1;
                            return (
                                <StaggerItem
                                    as="li"
                                    key={title}
                                    className="relative"
                                >
                                    <Card
                                        className={cn(
                                            "h-full gap-3 rounded-[14px] border px-[22px] py-[26px] ring-0",
                                            last
                                                ? "border-brand"
                                                : "border-line2",
                                            hoverCard,
                                        )}
                                    >
                                        <span className="font-mono text-xs text-brand-text">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className="font-heading text-[21px] font-bold text-head">
                                            {title}
                                        </h3>
                                        <p className="text-sm leading-[1.6] text-muted-foreground">
                                            {desc}
                                        </p>
                                    </Card>
                                    {!last && (
                                        <motion.span
                                            aria-hidden="true"
                                            className="absolute top-1/2 -right-[25px] hidden -translate-y-1/2 text-dim lg:block"
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{
                                                duration: 1.6,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: i * 0.2,
                                            }}
                                        >
                                            <ArrowRightIcon className="size-5" />
                                        </motion.span>
                                    )}
                                </StaggerItem>
                            );
                        })}
                    </Stagger>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */

export function Stack() {
    const { t } = useI18n();
    const groups: { title: string; brand?: boolean; items: string[] }[] = [
        {
            title: t.sAI,
            brand: true,
            items: ["LLM", "RAG", "Agents", t.tagGraphs, t.tagAuto],
        },
        {
            title: t.sFront,
            items: [
                "Next.js",
                "React.js",
                "Tailwind",
                "Figma",
                "Kotlin",
                "Android",
            ],
        },
        {
            title: t.sBack,
            items: [
                "Node.js",
                "Python",
                "FastAPI",
                "Java",
                "Spring Boot",
                "C#",
                ".NET",
                "PHP",
                "SQL",
                "Redis",
                "RabbitMQ",
                "APIs REST",
            ],
        },
        {
            title: t.sOps,
            items: [
                "Docker",
                "Compose",
                "Swarm",
                "GitHub Actions",
                "Jenkins",
                "AWS",
                "Azure",
                "Google Cloud",
            ],
        },
        {
            title: t.sQa,
            items: [
                "Jest",
                "Testing Library",
                "Playwright",
                "Storybook",
                t.tagDocs,
            ],
        },
        {
            title: t.sProc,
            items: [
                "Scrum",
                "Kanban",
                "Jira",
                "ServiceNow",
                "OutSystems",
                t.tagArch,
            ],
        },
    ];

    return (
        <section
            id="stack"
            className="border-y border-line bg-bg2 py-20 sm:py-[104px]"
        >
            <div className={cn(container, "flex flex-col gap-12")}>
                <div className="flex flex-col gap-3.5">
                    <Kicker>{t.stackKicker}</Kicker>
                    <H2>Stack</H2>
                </div>
                <Stagger
                    gap={0.08}
                    className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,340px),1fr))] gap-[22px]"
                >
                    {groups.map((g) => (
                        <StaggerItem key={g.title} className="flex">
                            <Card
                                className={cn(
                                    "w-full gap-4 rounded-[14px] border p-[26px] ring-0",
                                    g.brand ? "border-brand" : "border-line2",
                                    hoverCard,
                                )}
                            >
                                <h3>
                                    <Label brand={g.brand}>{g.title}</Label>
                                </h3>
                                <motion.ul
                                    className="flex flex-wrap gap-2"
                                    variants={{
                                        show: {
                                            transition: {
                                                staggerChildren: 0.03,
                                                delayChildren: 0.2,
                                            },
                                        },
                                    }}
                                >
                                    {g.items.map((item) => (
                                        <motion.li
                                            key={item}
                                            variants={{
                                                hidden: {
                                                    opacity: 0,
                                                    scale: 0.85,
                                                },
                                                show: {
                                                    opacity: 1,
                                                    scale: 1,
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 420,
                                                        damping: 24,
                                                    },
                                                },
                                            }}
                                            whileHover={{ y: -2 }}
                                        >
                                            <Badge
                                                variant="secondary"
                                                className="h-auto rounded-lg bg-chip px-3 py-[7px] text-sm font-normal text-foreground"
                                            >
                                                {item}
                                            </Badge>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </Card>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */

export function Career() {
    const { t } = useI18n();
    const lineRef = useRef<HTMLOListElement>(null);
    // A linha do tempo "acende" de cima para baixo enquanto você lê.
    const { scrollYProgress } = useScroll({
        target: lineRef,
        offset: ["start 70%", "end 60%"],
    });
    const grow = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
    const jobs: {
        date: string;
        role: string;
        company: string;
        bullets?: string[];
        text?: string;
        current?: boolean;
    }[] = [
        {
            date: t.j1date,
            role: t.j1role,
            company: "Tata Consultancy Services · Londrina, PR",
            bullets: [t.j1b1, t.j1b2, t.j1b3, t.j1b4],
            current: true,
        },
        {
            date: t.j2date,
            role: t.j2role,
            company: "Taskinset Tecnologia e Pessoas · Londrina, PR",
            bullets: [t.j2b1, t.j2b2, t.j2b3, t.j2b4],
        },
        {
            date: t.j3date,
            role: t.j3role,
            company: "Origini Italiane SAS · Londrina, PR",
            bullets: [t.j3b1, t.j3b2, t.j3b3],
        },
        {
            date: t.j4date,
            role: t.j4role,
            company: "Felix Acabamentos ME · Londrina, PR",
            text: t.j4d,
        },
        {
            date: t.j5date,
            role: t.j5role,
            company: "Construcia ME · Londrina, PR",
            text: t.j5d,
        },
    ];
    const education = [
        ["2024", t.e1, "UNOPAR"],
        ["2023", t.e2, "UNOPAR"],
        ["2021 — 2023", t.e3, "RocketSeat"],
        ["2011 — 2013", t.e4, "Faculdade Pitágoras"],
    ];
    const certs = [
        "Associate Developer (OutSystems O11)",
        t.c2,
        t.c3,
        "React Hooks",
        t.c5,
    ];
    const asideCard =
        "gap-5 rounded-[14px] border border-line2 p-[26px] ring-0";

    return (
        <section id="trajetoria" className="py-20 sm:py-[104px]">
            <div className={cn(container, "flex flex-col gap-14")}>
                <div className="flex flex-col gap-3.5">
                    <Kicker>{t.pathKicker}</Kicker>
                    <H2>{t.pathTitle}</H2>
                </div>

                <div className="flex flex-wrap items-start gap-16">
                    <ol
                        ref={lineRef}
                        className="relative ml-[7px] min-w-0 flex-[999_1_560px] border-l border-line2"
                    >
                        <motion.span
                            aria-hidden="true"
                            style={{ scaleY: grow }}
                            className="absolute top-0 -left-px h-full w-px origin-top bg-brand"
                        />
                        {jobs.map((job, i) => (
                            <motion.li
                                key={job.date}
                                initial={{ opacity: 0, x: 24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{
                                    once: true,
                                    margin: "0px 0px -15% 0px",
                                }}
                                transition={{
                                    duration: dur.base,
                                    ease: ease.out,
                                }}
                                className={cn(
                                    "relative pl-6 sm:pl-10",
                                    i === jobs.length - 1
                                        ? "pb-2"
                                        : "pb-[52px]",
                                )}
                            >
                                <motion.span
                                    aria-hidden="true"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{
                                        once: true,
                                        margin: "0px 0px -15% 0px",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 18,
                                        delay: 0.1,
                                    }}
                                    className={cn(
                                        "absolute top-1 -left-2 size-[15px] rounded-full",
                                        job.current
                                            ? "bg-brand shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-brand)_25%,transparent)]"
                                            : "border-2 border-dim bg-background",
                                    )}
                                />
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="font-mono text-[13px] text-dim">
                                        {job.date}
                                    </span>
                                    {job.current && (
                                        <Badge className="h-auto px-2 py-[3px] font-mono text-[11px] font-normal text-brand-ink">
                                            {t.current}
                                        </Badge>
                                    )}
                                </div>
                                <h3 className="mt-2.5 mb-0.5 font-heading text-[22px] font-bold text-head sm:text-[26px]">
                                    {job.role}
                                </h3>
                                <p className="text-base text-soft">
                                    {job.company}
                                </p>
                                {job.bullets && (
                                    <ul className="mt-[18px] flex list-disc flex-col gap-2 pl-[18px] text-[15px] leading-[1.6] text-muted-foreground">
                                        {job.bullets.map((b) => (
                                            <li key={b}>{b}</li>
                                        ))}
                                    </ul>
                                )}
                                {job.text && (
                                    <p className="mt-3.5 text-[15px] leading-[1.6] text-muted-foreground">
                                        {job.text}
                                    </p>
                                )}
                            </motion.li>
                        ))}
                    </ol>

                    <Stagger
                        gap={0.12}
                        className="flex min-w-0 flex-[1_1_320px] flex-col gap-[22px]"
                    >
                        <StaggerItem>
                            <Card className={asideCard}>
                                <h3>
                                    <Label brand>{t.edu}</Label>
                                </h3>
                                {education.map(([year, course, school]) => (
                                    <div
                                        key={course}
                                        className="flex flex-col gap-[3px]"
                                    >
                                        <span className="font-mono text-xs text-dim">
                                            {year}
                                        </span>
                                        <span className="text-base font-semibold text-head">
                                            {course}
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            {school}
                                        </span>
                                    </div>
                                ))}
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card className={cn(asideCard, "gap-4")}>
                                <h3>
                                    <Label brand>{t.certs}</Label>
                                </h3>
                                <ul className="flex list-disc flex-col gap-2 pl-[18px] text-sm leading-normal text-soft">
                                    {certs.map((c) => (
                                        <li key={c}>{c}</li>
                                    ))}
                                </ul>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card className={cn(asideCard, "gap-3.5")}>
                                <h3>
                                    <Label brand>{t.langProfile}</Label>
                                </h3>
                                <p className="text-sm leading-[1.6] text-soft">
                                    {t.langs}
                                </p>
                                <p className="text-sm leading-[1.6] text-muted-foreground">
                                    {t.profile}
                                </p>
                            </Card>
                        </StaggerItem>
                    </Stagger>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */

export function Projects() {
    const { t } = useI18n();
    const projects: Project[] = [
        {
            label: "FULLSTACK · TASKINSET",
            title: t.pr1t,
            description: t.pr1d,
            placeholder: t.placeholder,
        },
        {
            label: "WEB · ORIGINI ITALIANE",
            title: t.pr2t,
            description: t.pr2d,
            image: {
                src: "/images/origini.png",
                alt: t.alt2,
                width: 512,
                height: 351,
                bg: "bg-[#e9ecef]",
            },
            href: "https://www.originiitaliane.com.br",
        },
        {
            label: "UI · FIGMA",
            title: t.pr3t,
            description: t.pr3d,
            image: {
                src: "/images/origini-figma.png",
                alt: t.alt3,
                width: 512,
                height: 394,
                bg: "bg-[#2c2c2c]",
            },
        },
        {
            label: t.pr4lbl,
            title: t.pr4t,
            description: t.pr4d,
            image: {
                src: "/images/design-grafico.png",
                alt: t.alt4,
                width: 512,
                height: 503,
                bg: "bg-[#e9ecef]",
            },
        },
    ];

    return (
        <section
            id="projetos"
            className="border-y border-line bg-bg2 py-20 sm:py-[104px]"
        >
            <div className={cn(container, "flex flex-col gap-12")}>
                <div className="flex flex-col gap-3.5">
                    <Kicker>{t.projKicker}</Kicker>
                    <H2>{t.projTitle}</H2>
                </div>
                <Stagger
                    gap={0.1}
                    className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,440px),1fr))] gap-6"
                >
                    {projects.map((p) => (
                        <StaggerItem key={p.label} className="flex">
                            <TiltCard className="flex w-full">
                                <ProjectCard project={p} />
                            </TiltCard>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */

function LinkedInIcon() {
    return (
        <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M8 11v6" />
            <path d="M8 7.5v.01" />
            <path d="M12 17v-6" />
            <path d="M12 13.5c0-1.5 1-2.5 2.5-2.5S17 12 17 13.5V17" />
        </svg>
    );
}

function GitHubIcon() {
    return (
        <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
        </svg>
    );
}

function WhatsAppIcon() {
    return (
        <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 8.5c0 3.3 3.2 6.5 6.5 6.5l.8-1.6-1.8-.9-.9.9c-1.2-.5-2.5-1.8-3-3l.9-.9-.9-1.8z" />
        </svg>
    );
}

export function Contact() {
    const { t } = useI18n();
    const social = [
        {
            href: "https://www.linkedin.com/in/maykonfelixwebdeveloper",
            label: "LinkedIn",
            icon: <LinkedInIcon />,
        },
        {
            href: "https://github.com/MaykonFelix",
            label: "GitHub",
            icon: <GitHubIcon />,
        },
        {
            href: "https://wa.me/5543991114539",
            label: "WhatsApp",
            icon: <WhatsAppIcon />,
        },
    ];

    return (
        <section id="contato" className="pt-24 pb-16 sm:pt-[120px]">
            <div className={cn(container, "flex flex-col gap-10")}>
                <Kicker>{t.nextKicker}</Kicker>
                <H2 className="max-w-[900px] text-[40px] leading-[1.02] tracking-[-0.025em] sm:text-[64px]">
                    {t.contactTitle}
                </H2>
                <Stagger gap={0.08} className="flex flex-wrap gap-3.5">
                    <StaggerItem>
                        <Magnetic strength={0.15}>
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className={cn(ctaPrimary, "gap-2.5 py-4")}
                            >
                                <MailIcon
                                    aria-hidden="true"
                                    className="size-[18px]"
                                />
                                {CONTACT_EMAIL}
                            </a>
                        </Magnetic>
                    </StaggerItem>
                    {social.map((s) => (
                        <StaggerItem key={s.label}>
                            <Magnetic>
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(ctaGhost, "gap-2.5 py-4")}
                                >
                                    {s.icon}
                                    {s.label}
                                </a>
                            </Magnetic>
                        </StaggerItem>
                    ))}
                </Stagger>
                <Reveal y={0}>
                    <footer className="mt-[72px] flex flex-wrap justify-between gap-4 border-t border-line pt-7 font-mono text-[12.5px] text-dim">
                        <span>© 2026 Maykon Felix · Londrina, PR</span>
                        <span>#NeverStopLearning</span>
                    </footer>
                </Reveal>
            </div>
        </section>
    );
}
