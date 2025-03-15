/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cmsassets.rgpub.io",
        pathname: "/sanity/images/dsfx7636/**", // 와일드카드로 모든 하위 경로 허용
      },
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        pathname: "/cdn/**", // 와일드카드로 모든 하위 경로 허용
      },
      {
        protocol: "https",
        hostname: "brand.riotgames.com",
        pathname: "/static/**", // 와일드카드로 모든 하위 경로 허용
      },
    ],
  },
};

export default nextConfig;
