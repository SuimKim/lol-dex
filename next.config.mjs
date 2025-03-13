/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cmsassets.rgpub.io",
        port: "", // 기본 포트면 빈 문자열
        pathname: "/sanity/images/dsfx7636/**", // 와일드카드로 모든 하위 경로 허용
      },
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        port: "", // 기본 포트면 빈 문자열
        pathname: "/cdn/**", // 와일드카드로 모든 하위 경로 허용
      },
    ],
  },
};

export default nextConfig;
