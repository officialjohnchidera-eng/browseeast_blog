"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function handleConsent(choice: "accepted" | "declined") {
    localStorage.setItem("cookie-consent", choice);
    setVisible(false);

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: choice === "accepted" ? "granted" : "denied",
        ad_user_data: choice === "accepted" ? "granted" : "denied",
        ad_personalization: choice === "accepted" ? "granted" : "denied",
        analytics_storage: choice === "accepted" ? "granted" : "denied",
      });
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center gap-4">
        <p className="text-sm text-paper/80 flex-1">
          BrowseEast uses cookies to personalize content and analyze traffic.
          By clicking Accept, you consent to our use of cookies.{" "}
          <a href="/privacy" className="underline hover:text-brass">
            Learn more
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => handleConsent("declined")}
            className="font-mono text-xs uppercase tracking-wide border border-paper/30 px-4 py-2 rounded-md hover:border-paper transition"
          >
            Decline
          </button>
          <button
            onClick={() => handleConsent("accepted")}
            className="font-mono text-xs uppercase tracking-wide bg-brass text-ink px-4 py-2 rounded-md hover:bg-brass/90 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}