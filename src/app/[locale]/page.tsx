// next-intl
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

type HomeProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: HomeProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // Once the request locale is set, we can call hooks
  const t = await getTranslations({ locale, namespace: "Home" });

  return <p>{t("paragraph")}</p>;
}
