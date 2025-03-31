"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const t = useTranslations("Global.Header.ThemeSwitcher");

  const baseSwitcherClasses =
    "cursor-pointer text-sm md:text-base underline w-fit inline-flex";

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="invisible inline-flex">loading...</span>;
  }

  if (resolvedTheme === "dark") {
    return (
      <button
        aria-label="light mode switcher"
        className={baseSwitcherClasses}
        onClick={() => setTheme("light")}
      >
        {t("light")}
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        aria-label="dark mode switcher"
        className={baseSwitcherClasses}
        onClick={() => setTheme("dark")}
      >
        {t("dark")}
      </button>
    );
  }
}
