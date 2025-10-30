/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // When deploying to GitHub Pages under a repo (e.g. username.github.io/repo),
  // set basePath and assetPrefix to the repo name so static assets load correctly.
  // Update this value if your repo path differs.
  basePath: '/comic-site',
  assetPrefix: '/comic-site/',
  trailingSlash: true,
  images: {
    domains: ["localhost"]
  }
};
module.exports = nextConfig;