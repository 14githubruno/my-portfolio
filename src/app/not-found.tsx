import BaseLayout from "@/components/base-layout";
import NotFoundPage from "@/components/not-found-page";

import { routing } from "@/i18n/routing";

/**
 * This page renders when a route like `/unknown.txt` is requested.
 *
 * The layout at `app/[locale]/layout.tsx` receives
 * an invalid value as the `[locale]` param and calls `notFound()`.
 */
export default function NotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundPage />
    </BaseLayout>
  );
}
