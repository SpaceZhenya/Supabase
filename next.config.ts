import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/studypilot",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
