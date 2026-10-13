import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { contact, socials } from "@/data/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/GameDev", label: "Work" },
  { href: "/WebDev", label: "Web" },
  { href: "/Courses", label: "Teaching" },
];

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-2 sign sign-direction">
        Skip to content
      </a>
      <header className="border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="font-display font-extrabold text-2xl tracking-tight leading-none">
            Prabhu Awasthi
          </Link>
          <nav aria-label="Main" className="flex flex-wrap gap-2">
            {nav.map((n) => {
              const here = n.href === pathname;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={here ? "page" : undefined}
                  className={`sign ${here ? "sign-location" : "sign-direction"}`}
                >
                  {!here && <span aria-hidden="true">&#8599;</span>}
                  {n.label}
                </Link>
              );
            })}
            <a href={contact.cv} className="sign sign-direction" download>
              CV
            </a>
          </nav>
        </div>
      </header>

      <main id="main" className="flex-1">
        {children}
      </main>

      <footer className="bg-ink text-paper">
        <div className="mx-auto max-w-page px-4 sm:px-6 py-10 grid gap-6 md:grid-cols-[1fr_auto] items-end">
          <div>
            <p className="font-display font-bold text-3xl text-sign">Have a simulator, installation or game to build?</p>
            <p className="mt-2 text-paper/80">
              <a className="text-link decoration-sign hover:decoration-paper" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <span className="mx-2" aria-hidden="true">/</span>
              <a className="text-link decoration-sign hover:decoration-paper" href={contact.phoneHref}>
                {contact.phone}
              </a>
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a className="hover:text-sign" href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
