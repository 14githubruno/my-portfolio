import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
};

export default function PageWrapper({ children }: Props) {
  return (
    <main
      className={clsx(
        "mx-auto my-0 flex w-full max-w-[var(--max-viewport-width)] flex-col gap-8",
        "border-t border-r border-l border-dashed border-pink-500 dark:border-zinc-700"
      )}
    >
      {children}
    </main>
  );
}
