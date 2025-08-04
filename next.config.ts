import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@mui/x-data-grid"],
  eslint: {
    ignoreDuringBuilds: true, // برای جلوگیری از خطاهای ESLint هنگام دیپلوی
  },

};

export default nextConfig;

