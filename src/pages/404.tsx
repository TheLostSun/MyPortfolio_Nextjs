import Link from "next/link";
import Seo from "@/components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="This page does not exist." />
      <section className="mx-auto max-w-page px-4 sm:px-6 py-24">
        <h1 className="font-display font-extrabold text-7xl leading-none">Page not found</h1>
        <p className="mt-4 text-lg text-muted">That address does not lead anywhere. Try the work page instead.</p>
        <Link href="/GameDev" className="mt-6 sign sign-direction">
          <span aria-hidden="true">&#8599;</span>Work
        </Link>
      </section>
    </>
  );
}
