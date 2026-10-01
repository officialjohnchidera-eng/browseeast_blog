import type { Metadata } from "next";
import { Fragment } from "react";
export const revalidate = 0;
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
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
  mainImage?: any;
};

async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc){
      _id, title, slug, excerpt, "category": category->title, publishedAt, mainImage
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
              className="group block rounded-xl overflow-hidden border border-mist bg-paper hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="relative w-full h-44 bg-mist overflow-hidden">
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage).width(500).height(300).url()}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-3xl text-ink/20">›</span>
                  </div>
                )}
              </div>

              <div className="p-4">
                <span className="font-mono text-xs text-petrol uppercase tracking-wide">
                  {post.category} · {post.publishedAt?.slice(0, 10)}
                </span>
                <h2 className="font-display text-lg text-ink mt-2 group-hover:text-petrol transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-ink/70 mt-1 line-clamp-2">{post.excerpt}</p>
              </div>
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