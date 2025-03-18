// global css
import "../app/globals.css";

// types
import { ReactNode } from "react";

// providers
import ThemeContextProvider from "@/context/theme-provider";
import { NextIntlClientProvider } from "next-intl";

// components
import ThemeSwitcher from "@/components/theme-switcher";
import LocaleSwitcher from "@/components/locale-switcher";

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
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-amber-50 antialiased dark:bg-zinc-800">
        <ThemeContextProvider>
          <NextIntlClientProvider>
            <ThemeSwitcher />
            <LocaleSwitcher />
            <main>{children}</main>
          </NextIntlClientProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
