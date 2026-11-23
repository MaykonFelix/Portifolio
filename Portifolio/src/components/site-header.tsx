"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { useI18n } from "@/components/i18n-provider";
import { buttonVariants } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { languages, type Lang } from "@/lib/content";
import { cn } from "@/lib/utils";

export const CONTACT_EMAIL = "equipefelixx@gmail.com";

const pillItem =
  "h-9 min-w-[42px] rounded-full px-2.5 font-mono text-xs font-medium text-muted-foreground hover:bg-transparent hover:text-head aria-pressed:bg-brand aria-pressed:text-brand-ink aria-pressed:hover:bg-brand aria-pressed:hover:text-brand-ink";

const noop = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const theme = mounted ? (resolvedTheme ?? "dark") : "dark";

  const links = [
    { href: "#agente", label: t.navAgent },
    { href: "#pipeline", label: t.navPipeline },
    { href: "#stack", label: t.navStack },
    { href: "#trajetoria", label: t.navPath },
    { href: "#projetos", label: t.navProjects },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-hdr backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-3.5 sm:px-8">
        <a
          href="#topo"
          className="flex items-center gap-2.5 font-mono text-base font-medium text-foreground"
        >
          <span aria-hidden="true" className="size-2.5 rounded-[2px] bg-brand" />
          maykon.xyz
        </a>

        <div className="flex flex-wrap items-center gap-5">
          <nav
            aria-label={t.navLabel}
            className="flex flex-wrap items-center gap-6 text-sm"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hidden text-muted-foreground transition-colors hover:text-brand-text lg:inline"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={cn(
                buttonVariants(),
                "h-auto rounded-lg px-[18px] py-2.5 text-sm font-semibold text-brand-ink transition-transform hover:-translate-y-0.5 hover:bg-brand motion-reduce:hover:translate-y-0",
              )}
            >
              {t.ctaTalk}
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <ToggleGroup
              aria-label={t.langGroup}
              value={[lang]}
              onValueChange={(value) => {
                const next = value[0];
                if (next) setLang(next as Lang);
              }}
              spacing={0.5}
              className="rounded-full border border-line3 p-[3px]"
            >
              {languages.map((l) => (
                <ToggleGroupItem
                  key={l.code}
                  value={l.code}
                  aria-label={l.name}
                  lang={l.code}
                  className={pillItem}
                >
                  {l.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>

            <ToggleGroup
              aria-label={t.themeGroup}
              value={[theme]}
              onValueChange={(value) => {
                const next = value[0];
                if (next) setTheme(next);
              }}
              spacing={0.5}
              className="rounded-full border border-line3 p-[3px]"
            >
              <ToggleGroupItem
                value="dark"
                aria-label={t.themeDark}
                title={t.themeDark}
                className={pillItem}
              >
                <MoonIcon />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="light"
                aria-label={t.themeLight}
                title={t.themeLight}
                className={pillItem}
              >
                <SunIcon />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>
    </header>
  );
}
