/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "qaitglunkhssfuvbmvta.supabase.co",
          port: "",
        },
      ],
    },
  };

export default nextConfig;
