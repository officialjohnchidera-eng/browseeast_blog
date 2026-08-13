"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ADSENSE_CLIENT_ID } from "@/lib/ad-config";

type AdUnitProps = {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
};

export default function AdUnit({
  slot,
  format = "auto",
  responsive = true,
  className = "",
}: AdUnitProps) {
  const pathname = usePathname();
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, [pathname]);

  if (process.env.NODE_ENV !== "production") {
    return (
      <div
        className={`flex items-center justify-center bg-mist/50 border border-dashed border-mist text-ink/40 font-mono text-xs uppercase tracking-wide min-h-[100px] ${className}`}
      >
        Ad Placeholder — {slot}
      </div>
    );
  }

  return (
    <ins
      ref={adRef}
      className={`adsbygoogle block ${className}`}
      style={{ display: "block", minHeight: "100px" }}
      data-ad-client={ADSENSE_CLIENT_ID}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    />
  );
}