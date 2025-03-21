import "../app/globals.css";

import clsx from "clsx";

import { ReactNode } from "react";

import { Raleway, Playfair_Display } from "next/font/google";

import ThemeContextProvider from "@/context/theme-provider";
import { NextIntlClientProvider } from "next-intl";

import WebsiteWrapper from "./website-wrapper";
import PageWrapper from "./page-wrapper";
import Header from "./header";
import Footer from "./footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair_display = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type Props = {
  children: ReactNode;
  locale: string; // the promise resolves in `src/app/[locale]/layout.tsx`
};

/**
 * The `BaseLayout` component is used in:
 * - `src/app/[locale]/layout.tsx`
 * - `src/app/not-found.tsx` (to wrap the not-found page)
 */
export default async function BaseLayout({ children, locale }: Props) {
  return (
    <html className="scroll-smooth" lang={locale} suppressHydrationWarning>
      <body
        className={clsx(
          "flex min-h-screen w-full items-center justify-center bg-amber-50 text-dark antialiased dark:bg-stone-900 dark:text-amber-50",
          raleway.variable,
          playfair_display.variable,
          "font-raleway"
        )}
      >
        <ThemeContextProvider>
          <NextIntlClientProvider>
            <WebsiteWrapper>
              <Header />
              <PageWrapper>{children}</PageWrapper>
              <Footer />
            </WebsiteWrapper>
          </NextIntlClientProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
