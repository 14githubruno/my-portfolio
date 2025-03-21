"use client";

import { useLocale } from "next-intl";
import { usePathname as useNextIntlPathname } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const otherLocale = locale === "en" ? "it" : "en";
  const pathname = useNextIntlPathname();

  return (
    <a
      href={`${pathname}${otherLocale}`}
      className="w-fit text-sm underline md:text-base"
    >
      {otherLocale}
    </a>
  );
}
