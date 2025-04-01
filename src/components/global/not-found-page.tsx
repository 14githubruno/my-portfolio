import { useTranslations } from "next-intl";
import BaseParagraph from "../base-paragraph";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return (
    <BaseParagraph
      paragraph={t("paragraph")}
      extraTWClasses="border-b border-dashed border-pink-500 dark:border-zinc-700 pl-2 lg:pl-4"
    />
  );
}
