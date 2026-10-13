const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? "/kux-dev.github.io" : "");

const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  reactStrictMode: true,
  transpilePackages: ["three"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

