import clsx from "clsx";
import { useTranslations } from "next-intl";

export default function Headings() {
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
