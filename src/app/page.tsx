import Image from "next/image";
import Link from "next/link";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import { MainCardData, MainCardProps } from "@/types/pages/Home.types";

const HomePage = () => {
  const mainCardData: MainCardData[] = [
    {
      linkHref: "/champions",
      imgSrc:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/64008dd57fddfa0a3baad95b72e3bdd13068a97f-1920x1080.jpg",
      imgAlt: "챔피언 목록",
      textLabel: "챔피언 목록 보기",
    },
    {
      linkHref: "/rotations",
      imgSrc:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/510633f8ba622a63f02a88a96b2a28422180d735-1920x1080.jpg",
      imgAlt: "금주 로테이션",
      textLabel: "금주 로테이션 확인",
    },
    {
      linkHref: "/items",
      imgSrc:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7d6799d60e7029c4aa6a1d168ce7560b15ce5adf-1920x1080.jpg",
      imgAlt: "아이템 목록",
      textLabel: "아이템 목록 보기",
    },
  ];

  return (
    <>
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
    </>
  );
};
export default HomePage;

const MainCard = ({ linkHref, imgSrc, imgAlt, textLabel }: MainCardProps) => {
  return (
    <Link href={linkHref} className="flex flex-col items-center">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={1920}
        height={1080}
        style={{ width: "600px", height: "auto" }}
        priority
      />

      <Text size="md" align="center">
        {textLabel}
      </Text>
    </Link>
  );
};
