import clsx from "clsx";
import BaseParagraph from "./base-paragraph";
import NativeLink from "./native-link";
import type { NativeLinkProps } from "./native-link";

type SingleProjectLinks = NativeLinkProps[];

export type SingleProjectProps = {
  title: string;
  desc: string;
  stack: string[];
  links: SingleProjectLinks;
};

export default function SingleProject({
  title,
  desc,
  stack,
  links,
}: SingleProjectProps) {
  return (
    <div
      className={clsx(
        "flex w-full flex-col gap-4 border-t border-b border-dashed border-pink-500 not-first-of-type:border-t-0 dark:border-zinc-700",
        "md:flex-row md:justify-between",
        "lg:min-h-[18rem] lg:gap-0 lg:border-r-0 lg:border-l-0"
      )}
    >
      {/* title, desc, stack */}
      <div
        className={clsx(
          "flex flex-col justify-center gap-1 p-2",
          "md:w-3/4 md:gap-4 md:p-4"
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
        <BaseParagraph paragraph={desc} extraTWClasses="py-4" />
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
          "md:w-[12rem] md:items-center md:justify-between md:gap-2 lg:p-6"
        )}
      >
        {links.map((link, i) => {
          const isPrivate = link.href.length === 0;

          return (
            <li key={i}>
              {isPrivate ? (
                <del
                  className={clsx(
                    "cursor-not-allowed text-sm opacity-70",
                    "lg:text-base"
                  )}
                >
                  {link.text}
                </del>
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
