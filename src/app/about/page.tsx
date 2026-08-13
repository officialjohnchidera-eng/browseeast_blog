import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | BrowseEast",
  description: "Learn more about BrowseEast and what this blog covers.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">About BrowseEast</h1>

      <div className="prose mt-6 text-gray-700">
        <p>
          Write a couple of paragraphs here about who you are, why you started
          BrowseEast, and what readers can expect to find here. This page
          matters more than it looks — it's one of the main trust signals
          both for readers and for Google AdSense review.
        </p>
        <p>
          A short personal note, your background, or the mission behind the
          blog works well here. Adding a photo of yourself later also helps
          build credibility.
        </p>
      </div>
    </main>
  );
}