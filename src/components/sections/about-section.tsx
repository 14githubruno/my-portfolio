import clsx from "clsx";
import { useMessages } from "next-intl";

export default function AboutSection() {
  /* This is a test,
     so to use arrays in [locale].json files even though not recommended.
     Here: https://next-intl.dev/docs/usage/messages#arrays-of-messages  */
  const messages = useMessages();
  const { title, paragraphs } = messages.AboutSection;

  return (
    <section
      className={clsx(
        "flex flex-col gap-4 px-2 pt-16 pb-8",
        "lg:px-4 lg:pt-16"
      )}
    >
      <h3
        className={clsx(
          "text-lg text-zinc-500 dark:text-zinc-400",
          "lg:text-xl"
        )}
      >
        {title}
      </h3>
      <div className={clsx("flex flex-col gap-4", "lg:w-3/4")}>
        {paragraphs.map((paragraph: string) => {
          return (
            <p className="text-zinc-800 dark:text-amber-50" key={paragraph}>
              {paragraph}
            </p>
          );
        })}
      </div>
    </section>
  );
}
