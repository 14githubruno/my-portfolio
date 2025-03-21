import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
};

export default function PageWrapper({ children }: Props) {
  return (
    <main
      className={clsx(
        "mx-auto my-0 flex w-full max-w-[90rem] flex-col gap-16 pt-16",
        "border-t border-r border-l border-dashed border-pink-500 dark:border-zinc-700",
        "lg:gap-32 lg:pt-8"
      )}
    >
      {children}
    </main>
  );
}
