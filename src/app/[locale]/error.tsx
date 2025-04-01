"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import BaseParagraph from "@/components/base-paragraph";

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
    <div
      className={clsx(
        "flex flex-col gap-4 border-b border-dashed border-pink-500 py-2 pl-2 dark:border-zinc-700",
        "lg:py-4 lg:pl-4"
      )}
    >
      <BaseParagraph paragraph={t("paragraph")} />
      <button
        onClick={() => reset()}
        className="w-fit border border-dashed border-zinc-800 bg-amber-50 p-1.5 text-xs dark:border-amber-50 dark:bg-pink-900"
      >
        {t("buttonText")}
      </button>
    </div>
  );
}
