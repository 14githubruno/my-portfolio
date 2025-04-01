import clsx from "clsx";
import { useMessages } from "next-intl";
import BaseParagraph from "../base-paragraph";
import SingleProject from "../single-project";
import type { SingleProjectProps } from "../single-project";

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
        className={clsx(
          "flex flex-col gap-4 px-2 pb-16",
          "lg:w-3/4 lg:px-4 lg:pb-12"
        )}
      >
        {paragraphs.map((paragraph: string) => {
          return <BaseParagraph key={paragraph} paragraph={paragraph} />;
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
