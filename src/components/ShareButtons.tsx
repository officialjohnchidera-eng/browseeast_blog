"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";

type ShareButtonsProps = {
  url: string;
  title: string;
};

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const instagramUrl = `https://www.instagram.com/`;

  function handleCopy() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const iconButtonClass =
    "flex items-center justify-center w-9 h-9 rounded-full border border-mist text-ink/70 hover:border-petrol hover:text-petrol transition dark:text-ink/90 dark:hover:text-brass dark:hover:border-brass";

  return (
    <div className="flex items-center gap-3 mt-8 pt-6 border-t border-mist">
      <span className="font-mono text-xs uppercase tracking-wide text-ink/50">
        Share
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className={iconButtonClass}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.07c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.59-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.17.01.41-.07.64.49.24.57.81 1.97.88 2.11.07.14.12.3.02.49-.1.19-.15.3-.29.46-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.28.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.34 1.46.28.14.44.12.6-.07.17-.19.72-.84.91-1.13.19-.28.38-.23.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z"/>
        </svg>
      </a>

      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className={iconButtonClass}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.9 2H22l-7.6 8.7L23.3 22H16.6l-5.2-6.8L5.3 22H2.2l8.1-9.3L1.3 2h6.9l4.7 6.2L18.9 2zm-1.2 18h1.7L7.1 4H5.3l12.4 16z"/>
        </svg>
      </a>

      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className={iconButtonClass}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 9H15V6h-2.5C10.57 6 9 7.57 9 9.5V11H7v3h2v7h3v-7h2.1l.4-3H12V9.5c0-.28.22-.5.5-.5z"/>
        </svg>
      </a>

      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="BrowseEast on Instagram"
        className={iconButtonClass}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>

      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className={iconButtonClass}
      >
        {copied ? <Check size={16} /> : <Link2 size={16} />}
      </button>
    </div>
  );
}