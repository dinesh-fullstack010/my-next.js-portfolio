
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-next.js-portfolio",
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ["terminal.local"],
};

export default nextConfig;