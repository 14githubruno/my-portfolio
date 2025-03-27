import clsx from "clsx";
import { useMessages } from "next-intl";
import NativeLink from "../native-link";
import { type NativeLinkProps } from "../native-link";

type SingleProjectLinks = NativeLinkProps[];

type SingleProjectProps = {
  title: string;
  desc: string;
  stack: string[];
  links: SingleProjectLinks;
};

function SingleProject({ title, desc, stack, links }: SingleProjectProps) {
  return (
    <div
      className={clsx(
        "flex w-full flex-col gap-4 border-t border-b border-dashed border-pink-500 not-first-of-type:border-t-0 dark:border-zinc-700",
        "md:flex-row md:justify-between",
        "lg:min-h-[calc((90rem/8)*1.5)] lg:gap-0 lg:border-r-0 lg:border-l-0"
      )}
    >
      {/* title, desc, stack */}
      <div
        className={clsx(
          "flex flex-col justify-center gap-1 p-2",
          "md:gap-4 md:p-4",
          "lg:w-3/4"
        )}
      >
        <h4
          className={clsx(
            "pt-16 pb-4 font-playfair-display text-lg text-zinc-500 dark:text-pink-500",
            "lg:p-0 lg:text-2xl"
          )}
        >
          {title}
        </h4>
        <p
          className={clsx(
            "py-4 text-base text-zinc-800 dark:text-amber-50",
            "lg:text-base"
          )}
        >
          {desc}
        </p>
        <ul className={clsx("flex flex-wrap items-center gap-2")}>
          {stack.map((tech, i) => {
            return (
              <li
                className={clsx(
                  "border border-dashed border-zinc-800 bg-amber-50 p-1.5 text-xs dark:border-amber-50 dark:bg-pink-900"
                )}
                key={i}
              >
                {tech}
              </li>
            );
          })}
        </ul>
      </div>

      {/* links */}
      <ul
        className={clsx(
          "flex justify-between px-3 pt-16 pb-3",
          "md:w-[calc(90rem/8)] md:items-center md:justify-between md:gap-2 lg:p-6"
        )}
      >
        {links.map((link, i) => {
          const isPrivate = link.href.length === 0;

          return (
            <li key={i}>
              {isPrivate ? (
                <span
                  className={clsx(
                    "cursor-not-allowed text-sm opacity-70",
                    "lg:text-base"
                  )}
                >
                  {link.text}
                </span>
              ) : (
                <NativeLink {...link} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function ProjectsSection() {
  /* This is a test,
     see also AboutSection for more info  */
  const messages = useMessages();
  const { title, paragraphs, projectsData } = messages.ProjectsSection;

  return (
    <div className={clsx("flex flex-col gap-4", "lg:pt-16")}>
      <h3
        className={clsx(
          "px-2 text-lg text-zinc-500 dark:text-zinc-400",
          "lg:pl-4 lg:text-xl"
        )}
      >
        {title}
      </h3>
      <div
        className={clsx("flex flex-col gap-4 px-2 pb-16", "lg:pb-12 lg:pl-4")}
      >
        {paragraphs.map((paragraph: string) => {
          return (
            <p className="text-zinc-800 dark:text-amber-50" key={paragraph}>
              {paragraph}
            </p>
          );
        })}
      </div>
      <div>
        {projectsData.map((project: SingleProjectProps) => {
          return <SingleProject key={project.title} {...project} />;
        })}
      </div>
    </div>
  );
}
