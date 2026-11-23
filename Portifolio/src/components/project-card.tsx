"use client";

import { ArrowUpRightIcon, XIcon } from "lucide-react";
import Image from "next/image";

import { useI18n } from "@/components/i18n-provider";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export type Project = {
  label: string;
  title: string;
  description: string;
  /** texto exibido quando ainda não há imagem */
  placeholder?: string;
  image?: { src: string; alt: string; width: number; height: number; bg: string };
  href?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useI18n();
  const { image } = project;

  return (
    <Card className="gap-0 rounded-2xl border border-line2 py-0 ring-0 transition-[border-color,transform] duration-250 hover:-translate-y-[3px] hover:border-brand motion-reduce:hover:translate-y-0">
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 560px, 100vw"
          className={cn("mx-3.5 mt-3.5 h-[260px] w-[calc(100%-28px)] rounded-[10px] object-cover object-top", image.bg)}
        />
      ) : (
        <div className="mx-3.5 mt-3.5 flex h-[260px] items-center justify-center rounded-[10px] border-2 border-dashed border-line3 bg-inset p-4 text-center font-mono text-[13px] text-dim">
          {project.placeholder}
        </div>
      )}

      <div className="flex flex-col gap-2.5 px-[26px] pt-6 pb-7">
        <span className="font-mono text-xs tracking-[1.2px] text-brand-text">{project.label}</span>
        <h3 className="font-heading text-[23px] font-bold text-head">{project.title}</h3>
        <p className="text-[15px] leading-[1.6] text-muted-foreground">{project.description}</p>

        {image && (
          <Dialog>
            <DialogTrigger className="mt-1.5 self-start rounded-sm text-sm font-medium text-soft transition-colors hover:text-head focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none">
              {t.more}
            </DialogTrigger>
            <DialogContent
              showCloseButton={false}
              className="max-h-[calc(100dvh-2rem)] gap-6 overflow-y-auto rounded-2xl border border-line2 bg-card p-5 ring-0 sm:max-w-4xl sm:p-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 768px) 480px, 100vw"
                className={cn("h-auto w-full rounded-[10px]", image.bg)}
              />
              <div className="flex flex-col gap-4 md:pt-1">
                <DialogHeader className="gap-4 pr-10">
                  <span className="font-mono text-xs tracking-[1.2px] text-brand-text">{project.label}</span>
                  <DialogTitle className="font-heading text-[26px] leading-tight font-bold text-head">
                    {project.title}
                  </DialogTitle>
                  <DialogDescription className="text-[15px] leading-[1.6] text-muted-foreground">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants(),
                      "mt-2 h-auto gap-2 self-start rounded-[10px] px-5 py-3 text-sm font-semibold text-brand-ink hover:bg-brand/85",
                    )}
                  >
                    {t.viewProject}
                    <ArrowUpRightIcon aria-hidden="true" />
                  </a>
                )}
              </div>
              <DialogClose
                aria-label={t.close}
                className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full border border-line3 text-muted-foreground transition-[border-color,color,transform] hover:rotate-90 hover:border-brand hover:text-head motion-reduce:hover:rotate-0"
              >
                <XIcon aria-hidden="true" className="size-[18px]" />
              </DialogClose>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </Card>
  );
}
