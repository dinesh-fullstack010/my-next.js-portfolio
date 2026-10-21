
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/dinesh-next-portfolio",
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ["terminal.local"],
};

export default nextConfig;
