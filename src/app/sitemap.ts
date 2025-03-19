// types
import { MetadataRoute } from "next";
import { Locale } from "next-intl";

// next-intl lib
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

// helpers
import { getBaseUrl } from "@/helpers/get-base-url";

type Href = Parameters<typeof getPathname>[0]["href"];

type SitemapEntry = {
  url: string;
  alternates: {
    languages: Record<string, string>;
  };
};

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return getBaseUrl() + pathname;
}

function getEntries(href: Href): SitemapEntry {
  return {
    url: href === "/" ? getBaseUrl() : getBaseUrl() + href,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)])
      ),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [getEntries("/")];
}
