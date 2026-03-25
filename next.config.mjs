/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    qualities: [70, 80, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pxdwbyynxirzalbnqbgy.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
