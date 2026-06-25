/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // <-- THIS BYPASSES THE AZURE CRASH
  },
};

export default nextConfig;