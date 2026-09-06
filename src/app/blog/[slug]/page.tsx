import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import AdUnit from "@/components/ads/AdUnit";
import { AD_SLOTS } from "@/lib/ad-config";

type Post = {
  title: string;
  category?: string;
  author?: { name: string; image?: any };
  publishedAt?: string;
  body?: any;
  mainImage?: any;
};

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title, "category": category->title, "author": author->{name, image}, publishedAt, body, mainImage
    }`,
    { slug }
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post Not Found | BrowseEast" };
  }

  return {
    title: `${post.title} | BrowseEast`,
    description: post.title,
  };
}

// Closure-based counter — created fresh per render, avoids shared module-level state
function createPortableTextComponents(): PortableTextComponents {
  let blockCount = 0;

  return {
    block: {
      normal: ({ children }) => {
        blockCount++;
        const showAd = blockCount % 3 === 0;

        return (
          <>
            <p>{children}</p>
            {showAd && <AdUnit slot={AD_SLOTS.inArticle} className="my-8" />}
          </>
        );
      },
    },
    types: {
      image: ({ value }) => (
        <div className="relative w-full h-80 my-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).width(800).height(500).url()}
            alt={value.alt || "Post image"}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      ),
    },
  };
}

export default async function SinglePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1 max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/blog"
        className="font-mono text-xs uppercase tracking-wide text-petrol hover:text-brass transition"
      >
        ← Back to Blog
      </Link>

      <span className="block font-mono text-xs text-ink/50 mt-8">
        {post.category} · {post.publishedAt?.slice(0, 10)}
        {post.author?.name && ` · By ${post.author.name}`}
      </span>

      <h1 className="font-display text-4xl text-ink mt-2">{post.title}</h1>

      {post.mainImage && (
        <div className="relative w-full h-72 mt-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(post.mainImage).width(800).height(450).url()}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      )}

      <article className="prose prose-p:text-ink/80 prose-headings:font-display prose-headings:text-ink mt-8">
        {post.body && (
          <PortableText value={post.body} components={createPortableTextComponents()} />
        )}
      </article>
    </main>
  );
}