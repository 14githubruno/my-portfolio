import type { Metadata } from "next";
import { ReactNode } from "react";

import { notFound } from "next/navigation";

import { getBaseUrl } from "@/helpers/get-base-url";

import { Locale, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

import BaseLayout from "@/components/base-layout";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  other: {
    google: "notranslate",
  },
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
