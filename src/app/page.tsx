import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import Image from "next/image";
import Link from "next/link";

type CardData = {
  linkHref: string;
  imgSrc: string;
  imgAlt: string;
  textLabel: string;
};

export default function Home() {
  const mainCardData: CardData[] = [
    {
      linkHref: "/champion",
      imgSrc:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/64008dd57fddfa0a3baad95b72e3bdd13068a97f-1920x1080.jpg",
      imgAlt: "챔피언 목록",
      textLabel: "챔피언 목록 보기",
    },
    {
      linkHref: "/rotation",
      imgSrc:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/510633f8ba622a63f02a88a96b2a28422180d735-1920x1080.jpg",
      imgAlt: "금주 로테이션",
      textLabel: "금주 로테이션 확인",
    },
    {
      linkHref: "/champion",
      imgSrc:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/universe_live/7b11239cf024358011444e7d70bb2badbb6b33e2-6000x3155.jpg",
      imgAlt: "아이템 목록",
      textLabel: "아이템 목록 보기",
    },
  ];

  return (
    <main className="mt-24">
      <section className="text-center">
        <Title tag="h1" size="4xl" align="center" margin="none">
          리그오브레전드 정보 앱
        </Title>
        <Text size="md" align="center">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </Text>
      </section>
      <section>
        {mainCardData.map((data, index) => (
          <MainCard
            key={index}
            linkHref={data.linkHref}
            imgSrc={data.imgSrc}
            imgAlt={data.imgAlt}
            textLabel={data.textLabel}
          />
        ))}
      </section>
    </main>
  );
}

type MainCardProps = {
  linkHref: string;
  imgSrc: string;
  imgAlt: string;
  textLabel: string;
};

const MainCard = ({ linkHref, imgSrc, imgAlt, textLabel }: MainCardProps) => {
  return (
    <Link href={linkHref} className="flex flex-col items-center">
      <Image src={imgSrc} alt={imgAlt} width={600} height={400} />

      <Text size="md" align="center">
        {textLabel}
      </Text>
    </Link>
  );
};
