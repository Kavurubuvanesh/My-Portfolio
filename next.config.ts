import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // <-- THIS IS THE ARCHITECTURE FIX
  // ... any other config settings you have
};

export default nextConfig;
