"use client";

import { useState } from "react";

type ShareButtonsProps = {
  url: string;
  title: string;
};

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

  function handleCopy() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-3 mt-8">
      <span className="font-mono text-xs uppercase tracking-wide text-ink/50">
        Share
      </span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs border border-mist rounded-full px-3 py-1.5 hover:border-petrol hover:text-petrol transition"
      >
        WhatsApp
      </a>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs border border-mist rounded-full px-3 py-1.5 hover:border-petrol hover:text-petrol transition"
      >
        X
      </a>
      <button
        onClick={handleCopy}
        className="font-mono text-xs border border-mist rounded-full px-3 py-1.5 hover:border-petrol hover:text-petrol transition"
      >
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
}