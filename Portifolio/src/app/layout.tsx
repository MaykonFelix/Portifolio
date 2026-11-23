import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { I18nProvider } from "@/components/i18n-provider";
import { MotionProvider } from "@/components/motion";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maykon.vercel.app"),
  title: "Maykon Felix — Software Engineer e IA Aplicada",
  description:
    "Software Engineer levando IA aplicada (LLMs, RAG e agentes) para produtos web reais com Next.js, Node.js, Docker e cloud.",
  openGraph: {
    title: "Maykon Felix — Software Engineer e IA Aplicada",
    description:
      "LLMs, RAG e agentes inteligentes sobre uma base sólida de Next.js, Node.js, Docker e cloud.",
    url: "https://maykon.vercel.app",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ThemeProvider>
          <I18nProvider>
            <MotionProvider>{children}</MotionProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
