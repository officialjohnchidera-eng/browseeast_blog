import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import AdUnit from "@/components/ads/AdUnit";
import { AD_SLOTS } from "@/lib/ad-config";
export const revalidate = 0;

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
  Notes on tech, productivity, and culture — written for people who'd rather
  browse deep than scroll fast.
</p>
      </section>

      <AdUnit slot={AD_SLOTS.homepageBanner} className="my-8" />

      {/* Featured post */}
      {featured && (
        <section className="max-w-6xl mx-auto px-4 py-8">
          <Link
            href={`/blog/${featured.slug.current}`}
            className="group grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-mist hover:shadow-lg transition-all duration-200"
          >
            <div className="relative w-full h-64 md:h-full bg-mist overflow-hidden">
              {featured.mainImage ? (
                <Image
                  src={urlFor(featured.mainImage).width(700).height(500).url()}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-display text-5xl text-ink/20">›</span>
                </div>
              )}
            </div>
            <div className="p-8 flex flex-col justify-center bg-petrol/5">
              <span className="font-mono text-xs uppercase tracking-wide text-petrol">
                ›  Featured
              </span>
              <h2 className="font-display text-3xl text-ink mt-2 group-hover:text-petrol transition-colors">
                {featured.title}
              </h2>
              <p className="text-ink/70 mt-3">{featured.excerpt}</p>
              <span className="inline-block mt-4 font-mono text-sm text-petrol">
                Read more →
              </span>
            </div>
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
              className="group block rounded-xl overflow-hidden border border-mist bg-paper hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="relative w-full h-40 bg-mist overflow-hidden">
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage).width(400).height(240).url()}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-2xl text-ink/20">›</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <span className="font-mono text-xs text-ink/50">
                  {post.category} · {post.publishedAt?.slice(0, 10)}
                </span>
                <h3 className="font-display text-lg text-ink mt-1 group-hover:text-petrol transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-ink/70 mt-1 line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}