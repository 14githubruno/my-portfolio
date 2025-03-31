import clsx from "clsx";
import NativeLink from "../../native-link";
import { useTranslations } from "next-intl";

export default function FooterParagraphs() {
  const t = useTranslations("Global.Footer.FooterParagraphs");

  return (
    <div className={clsx("flex flex-col gap-8 pl-2", "lg:pl-4")}>
      <p className={clsx("pr-2 text-sm", "lg:text-base")}>
        {t.rich("stackDesc", {
          repo: (chunks) => (
            <NativeLink href="https://github.com/14githubruno/my-portfolio">
              {chunks}
            </NativeLink>
          ),
        })}
      </p>
      <p
        className={clsx(
          "mb-16 text-sm text-zinc-500 dark:text-zinc-400",
          "lg:text-base"
        )}
      >
        &copy; {new Date().getFullYear()} {t("copyright")}
      </p>
    </div>
  );
}
