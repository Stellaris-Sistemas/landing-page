import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="sr-only rounded-btn bg-brand px-4 py-3 text-sm font-semibold text-text focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70]"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
