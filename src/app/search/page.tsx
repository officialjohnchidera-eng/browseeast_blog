import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Search | BrowseEast",
  description: "Search BrowseEast articles.",
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  category?: string;
};

async function searchPosts(query: string): Promise<Post[]> {
  if (!query) return [];
  return client.fetch(
    `*[_type == "post" && (title match $q || excerpt match $q)]{
      _id, title, slug, excerpt, "category": category->title
    }`,
    { q: `${query}*` }
  );
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const results = q ? await searchPosts(q) : [];

  return (
    <main className="flex-1 max-w-3xl mx-auto px-4 py-16">
      <span className="font-mono text-xs uppercase tracking-wide text-petrol">
        › Search
      </span>
      <h1 className="font-display text-4xl text-ink mt-2">
        {q ? `Results for "${q}"` : "Search"}
      </h1>

      <form className="mt-8 flex gap-2">
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Search articles..."
          className="flex-1 border border-mist rounded-md px-3 py-2"
        />
        <button
          type="submit"
          className="bg-petrol text-paper px-5 py-2 rounded-md hover:bg-petrol/90 transition"
        >
          Search
        </button>
      </form>

      <div className="mt-10 space-y-6">
        {q && results.length === 0 && (
          <p className="text-ink/60">No articles found for "{q}".</p>
        )}
        {results.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="block border border-mist rounded-lg p-4 hover:shadow-md hover:border-petrol/30 transition"
          >
            <span className="font-mono text-xs text-ink/50">{post.category}</span>
            <h2 className="font-display text-lg text-ink mt-1">{post.title}</h2>
            <p className="text-sm text-ink/70 mt-1">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}