// next.config.mjs
import { withSitemap } from "next-sitemap";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // Add your custom config here
};

export default withSitemap(nextConfig);
