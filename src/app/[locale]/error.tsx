"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const t = useTranslations("Error");

  return (
    <div>
      <h1>{t("title")}</h1>
      <button onClick={() => reset()}>{t("buttonText")}</button>
    </div>
  );
}
