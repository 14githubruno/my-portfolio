// next-intl lib
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return <p>{t("paragraph")}</p>;
}
