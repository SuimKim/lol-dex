import Image from "next/image";
import Link from "next/link";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import { MainCardData, MainCardProps } from "@/types/pages/Home.types";
import Spacer from "@/components/common/Spacer";

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
      <Image
        src={
          "https://brand.riotgames.com/static/3448a13646eaa89d5c6c7d4bf0f5a7b6/ae35d/logo-d-4x-zoom-rendered-00.webp"
        }
        width={1920}
        height={831}
        alt="로고"
        className="relative -top-10 -z-10"
      />
      <section className="text-center px-10">
        <Title tag="h1" size="xl" align="center" margin="lg">
          리그오브레전드 정보 앱
        </Title>
        <Text size="md" align="center">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </Text>
      </section>
      <Spacer size="md" />
      <section className="flex flex-col items-center px-10">
        {mainCardData.map((data, index) => (
          <>
            <MainCard
              key={index}
              linkHref={data.linkHref}
              imgSrc={data.imgSrc}
              imgAlt={data.imgAlt}
              textLabel={data.textLabel}
            />
            <Spacer size="sm" />
          </>
        ))}
      </section>
    </>
  );
};
export default HomePage;

const MainCard = ({ linkHref, imgSrc, imgAlt, textLabel }: MainCardProps) => {
  return (
    <Link href={linkHref} className="flex flex-col items-center border-2 p-5">
      <Image src={imgSrc} alt={imgAlt} width={1920} height={1080} priority />
      <Spacer size="sm" />
      <Title tag="h2" size="sm" align="center" margin="none">
        {textLabel}
      </Title>
    </Link>
  );
};
