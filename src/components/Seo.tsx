import Head from "next/head";

const SITE = "https://prabhuawasthi.vercel.app";

export default function Seo({ title, description, path = "/" }: { title: string; description: string; path?: string }) {
  const full = title === "Prabhu Awasthi" ? "Prabhu Awasthi, Unity Developer" : `${title} | Prabhu Awasthi`;
  return (
    <Head>
      <title>{full}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={`${SITE}${path}`} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE}${path}`} />
      <meta property="og:image" content={`${SITE}/posters/Vectra.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
