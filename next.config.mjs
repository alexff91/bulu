/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Emitted as plain files so it can be served by the same Caddy that already
    // fronts the other sites - no build platform, no server to keep alive.
    output: 'export',
    images: {
      // The exported site has no image server, so images are used as authored.
      unoptimized: true,
    },
  };
  
  export default nextConfig;
  