/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  viewport: {
    colorScheme: 'dark',
  },
  optimizeFonts: false,
  images: {
    domains: ['https://www.thekaran.pro/'],
  },
  env: {
    metadataBase: 'https://www.thekaran.pro/', 
  },
  fontLoaders: [
    {
      loader: "@next/font/google",
      options: {
        subsets: ["latin"],
        weight: ["400", "500", "600", "700", "800"],
      },
    },
  ],
};

module.exports = nextConfig;
