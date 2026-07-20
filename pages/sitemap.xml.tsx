import type { GetServerSideProps } from "next";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "tyc9omzx",
  dataset: "production",
  apiVersion: "2022-10-23",
  useCdn: false,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://isaiahtaylor.com";

// Crawlable pages that aren't Sanity posts.
const STATIC_PATHS = ["", "/about", "/highlights"];

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

type PostRef = { slug?: string; _updatedAt?: string };

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts: PostRef[] = await client.fetch(
    `*[_type == "post" && defined(slug.current)] | order(_updatedAt desc) { "slug": slug.current, _updatedAt }`
  );

  const entries = [
    ...STATIC_PATHS.map((path) => ({ loc: `${SITE_URL}${path}` })),
    ...posts.map((post) => ({
      loc: `${SITE_URL}/${post.slug}`,
      lastmod: post._updatedAt,
    })),
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries
      .map(
        (e) =>
          `  <url>\n    <loc>${escapeXml(e.loc)}</loc>` +
          ("lastmod" in e && e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : "") +
          `\n  </url>`
      )
      .join("\n") +
    `\n</urlset>\n`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.write(body);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
