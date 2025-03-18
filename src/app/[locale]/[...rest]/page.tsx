// next lib
import { notFound } from "next/navigation";

/**
 * Just call Next.js `notFound()`.
 * See `src/app/[locale]/not-found.tsx`
 */
export default function CatchAllPage() {
  notFound();
}
