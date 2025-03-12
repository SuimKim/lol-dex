import Image from "next/image";

export default function Home() {
  const championsImgPath: string =
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/64008dd57fddfa0a3baad95b72e3bdd13068a97f-1920x1080.jpg";
  const lotationsImgPath: string =
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/510633f8ba622a63f02a88a96b2a28422180d735-1920x1080.jpg";
  const itemsImgPath: string =
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/universe_live/7b11239cf024358011444e7d70bb2badbb6b33e2-6000x3155.jpg";
  return (
    <main className="mt-24">
      <section className="text-center">
        <h1 className="font-bold text-4xl">리그오브레전드 정보 앱</h1>
        <p className="mt-5">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
      </section>
    </main>
  );
}
