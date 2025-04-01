"use client";

import { useLocale } from "next-intl";
import { usePathname as useNextIntlPathname } from "@/i18n/navigation";
import NativeLink from "../../native-link";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const otherLocale = locale === "en" ? "it" : "en";
  const pathname = useNextIntlPathname();

  return (
    <NativeLink
      href={`${pathname === "/" ? `${pathname}${otherLocale}` : `/${otherLocale}`}`}
      target="_self"
      text={otherLocale}
    />
  );
}
