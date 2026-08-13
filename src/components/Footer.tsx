import Link from "next/link";
import { client } from "@/sanity/lib/client";

type Category = {
  title: string;
  slug: { current: string };
};

async function getCategories(): Promise<Category[]> {
  return client.fetch(`*[_type == "category"]{ title, slug }`);
}

export default async function Footer() {
  const categories = await getCategories();

  return (
    <footer className="mt-auto bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About blurb */}
        <div>
          <h3 className="font-display text-lg flex items-center gap-1">
            <span className="text-brass">›</span> BrowseEast
          </h3>
          <p className="text-sm text-paper/70 mt-2">
            Short description of what this blog is about goes here.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wide text-paper/50 mb-3">Site</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="text-paper/80 hover:text-brass transition">About</Link></li>
            <li><Link href="/contact" className="text-paper/80 hover:text-brass transition">Contact</Link></li>
            <li><Link href="/privacy" className="text-paper/80 hover:text-brass transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-paper/80 hover:text-brass transition">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wide text-paper/50 mb-3">Categories</h4>
          <ul className="space-y-2 text-sm">
            {categories.length === 0 && (
              <li className="text-paper/50">No categories yet</li>
            )}
            {categories.map((cat) => (
              <li key={cat.slug.current}>
                <span className="text-paper/80">{cat.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10 py-4 text-center font-mono text-xs text-paper/50">
        © {new Date().getFullYear()} BrowseEast. All rights reserved.
      </div>
    </footer>
  );
}