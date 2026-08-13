import Link from "next/link";
import { client } from "@/sanity/lib/client";
import AdUnit from "@/components/ads/AdUnit";
import { AD_SLOTS } from "@/lib/ad-config";

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

export default async function HomePage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl text-ink">
          Browse<span className="text-brass">East</span>
        </h1>
        <p className="mt-4 text-lg text-ink/70 max-w-xl mx-auto">
          A short, clear value proposition about what this blog covers goes here.
        </p>
      </section>

      <AdUnit slot={AD_SLOTS.homepageBanner} className="my-8" />

      {/* Featured post */}
      {featured && (
        <section className="max-w-6xl mx-auto px-4 py-8">
          <Link
            href={`/blog/${featured.slug.current}`}
            className="block border border-mist rounded-lg p-8 bg-petrol/5 hover:bg-petrol/10 transition"
          >
            <span className="font-mono text-xs uppercase tracking-wide text-petrol">
              ›  Featured
            </span>
            <h2 className="font-display text-3xl text-ink mt-2">{featured.title}</h2>
            <p className="text-ink/70 mt-3">{featured.excerpt}</p>
            <span className="inline-block mt-4 font-mono text-sm text-petrol">
              Read more →
            </span>
          </Link>
        </section>
      )}

      {/* Recent posts grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="font-mono text-xs uppercase tracking-wide text-ink/50 mb-4">
          Recent Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="border border-mist rounded-lg p-4 hover:shadow-md hover:border-petrol/30 transition"
            >
              <span className="font-mono text-xs text-ink/50">
                {post.category} · {post.publishedAt?.slice(0, 10)}
              </span>
              <h3 className="font-display text-lg text-ink mt-1">{post.title}</h3>
              <p className="text-sm text-ink/70 mt-1">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}