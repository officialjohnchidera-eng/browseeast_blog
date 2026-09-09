import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | BrowseEast",
  description: "Learn more about BrowseEast and what this blog covers.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">About BrowseEast</h1>

     <article className="prose prose-p:text-ink/80 prose-headings:font-display prose-headings:text-ink mt-6">
  <p>
    BrowseEast started as a simple idea: the internet is full of noise, but
    genuinely useful writing is still out there if you know where to look.
    This is a place to slow down and actually read — pieces on technology,
    productivity, and the small cultural shifts that shape how we live and
    work.
  </p>
  <p>
    There's no single lane here. Some weeks it's a deep dive into a tool
    worth using. Other weeks it's a reflection on a habit, a trend, or an
    idea worth sitting with a little longer than a headline allows. The
    thread connecting it all is curiosity — browsing outward, one honest
    piece at a time.
  </p>
  <p>
    If something here is useful, wrong, or worth arguing about, reach out —
    the <a href="/contact">contact page</a> is always open.
  </p>
</article>
    </main>
  );
}