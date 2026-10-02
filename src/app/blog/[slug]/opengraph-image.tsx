import { ImageResponse } from "next/og";
import { client } from "@/sanity/lib/client";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{ title, "category": category->title }`,
    { slug }
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#FAF7F0",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#1F5C5C", marginBottom: 20 }}>
          › {post?.category || "BrowseEast"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "#1B2430",
            lineHeight: 1.2,
          }}
        >
          {post?.title || "BrowseEast"}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#C08A3E", marginTop: 40 }}>
          BrowseEast — Field Journal of Discovery
        </div>
      </div>
    ),
    { ...size }
  );
}