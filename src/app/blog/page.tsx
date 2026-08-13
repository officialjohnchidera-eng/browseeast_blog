import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import AdUnit from "@/components/ads/AdUnit";
import { AD_SLOTS } from "@/lib/ad-config";

export const metadata: Metadata = {
  title: "Blog | BrowseEast",
  description: "Browse all posts from BrowseEast.",
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  category?: string;
  publishedAt?: string;
};

async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc){
      _id, title, slug, excerpt, "category": category->title, publishedAt
    }`
  );
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="flex-1 max-w-6xl mx-auto px-4 py-16">
      <span className="font-mono text-xs uppercase tracking-wide text-petrol">
        › All Posts
      </span>
      <h1 className="font-display text-4xl text-ink mt-2 mb-10">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Fragment key={post._id}>
            <Link
              href={`/blog/${post.slug.current}`}
              className="border border-mist rounded-lg p-4 hover:shadow-md hover:border-petrol/30 transition flex flex-col"
            >
              <span className="font-mono text-xs text-ink/50">
                {post.category} · {post.publishedAt?.slice(0, 10)}
              </span>
              <h2 className="font-display text-lg text-ink mt-2">{post.title}</h2>
              <p className="text-sm text-ink/70 mt-1">{post.excerpt}</p>
            </Link>

            {(index + 1) % 5 === 0 && (
              <AdUnit slot={AD_SLOTS.inFeed} className="col-span-full" />
            )}
          </Fragment>
        ))}
      </div>
    </main>
  );
}