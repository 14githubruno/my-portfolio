import { setRequestLocale, getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

import { Fragment } from "react";
import AboutSection from "@/components/sections/about-section";
import ProjectsSection from "@/components/sections/projects-section";

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

  return (
    <Fragment>
      <AboutSection />
      <ProjectsSection />
    </Fragment>
  );
}
