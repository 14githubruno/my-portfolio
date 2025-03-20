"use client";

// next-intl lib
import { useLocale } from "next-intl";
import {
  Link as NextIntlLink,
  usePathname as useNextIntlPathname,
} from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const otherLocale = locale === "en" ? "it" : "en";
  const pathname = useNextIntlPathname();

  return (
    <NextIntlLink
      href={pathname}
      locale={otherLocale}
      scroll={false}
      className="w-fit underline"
    >
      {otherLocale}
    </NextIntlLink>
  );
}
