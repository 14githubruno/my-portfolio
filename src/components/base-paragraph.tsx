import clsx from "clsx";

type BaseParagraphProps = {
  paragraph: string;
  extraTWClasses?: string;
};

/**
 * @note This component is *not* used in the footer
 */
export default function BaseParagraph({
  paragraph,
  extraTWClasses,
}: BaseParagraphProps) {
  return (
    <p
      className={clsx(
        "text-zinc-800 dark:text-amber-50",
        "lg:w-3/4",
        extraTWClasses
      )}
    >
      {paragraph}
    </p>
  );
}
