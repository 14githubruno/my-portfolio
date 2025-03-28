import clsx from "clsx";

import Logo from "./logo";
import ThemeSwitcher from "./theme-switcher";
import LocaleSwitcher from "./locale-switcher";

import { useTranslations } from "next-intl";

function Headings() {
  const t = useTranslations("Global.Header.Headings");

  return (
    <header className="absolute bottom-16">
      <h1
        className={clsx(
          "flex flex-col text-2xl",
          "md:flex-row md:gap-2 md:text-3xl",
          "lg:text-4xl"
        )}
      >
        {t("headingOne")
          .split(" ")
          .map((str, i) => {
            return <span key={i}>{str}</span>;
          })}
      </h1>
      <h2
        className={clsx(
          "flex flex-col font-playfair-display text-xl text-zinc-500 dark:text-pink-500",
          "md:flex-row md:gap-2 md:text-2xl",
          "lg:text-3xl"
        )}
      >
        {t("headingTwo")
          .split(" ")
          .map((str, i) => {
            return <span key={i}>{str}</span>;
          })}
      </h2>
    </header>
  );
}

function Switchers() {
  return (
    <div
      className={clsx(
        "absolute top-16 flex flex-col items-end gap-4 self-center justify-self-end",
        "lg:gap-8 lg:pr-4"
      )}
    >
      <ThemeSwitcher />
      <LocaleSwitcher />
    </div>
  );
}

export default function Header() {
  return (
    <header
      id="header"
      className={clsx(
        "grid h-[calc(100vh-(120rem/8))] grid-cols-2",
        "lg:h-[calc(100vh-(90rem/8))] lg:grid-cols-3"
      )}
    >
      <div className="relative border-r border-dashed border-pink-500 px-4 dark:border-zinc-700">
        <Logo href="footer" />
        <Headings />
      </div>
      <Switchers />
    </header>
  );
}
