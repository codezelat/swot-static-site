import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "SWOT Digital Marketing Sri Lanka",
    short_name: "SWOT",
    description: "Strategy, creative, media and measurable growth.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f7f4ec",
    theme_color: "#5426db",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/swot-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/swot-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
