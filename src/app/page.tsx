import Link from "next/link";
import type { MainCardData } from "@/types/pages/Home.types";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import Spacer from "@/components/common/Spacer";
import SkeletonImage from "@/components/common/SkeletonImage";
import { MAIN_CARD_DATA } from "@/constants";

const HomePage = () => {
  const mainCardData: MainCardData[] = MAIN_CARD_DATA;

  return (
    <>
      <Logo />
      <Spacer size="lg" />
      <section className="text-center">
        <Title tag="h1" size="xl" align="center" margin="lg">
          리그오브레전드 정보 앱
        </Title>
        <Text size="md" align="center" oneLine={false}>
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

const Logo = () => {
  return (
    <SkeletonImage
      imgPath="https://brand.riotgames.com/static/3448a13646eaa89d5c6c7d4bf0f5a7b6/ae35d/logo-d-4x-zoom-rendered-00.webp"
      imgWidth={1920}
      imgHeight={831}
      alt="로고"
      priority
    />
  );
};

const MainCard = ({ linkHref, imgSrc, imgAlt, textLabel }: MainCardData) => {
  return (
    <Link
      href={linkHref}
      className="flex flex-col items-center border-2 border-gray-500 p-5 max-w-[600px]"
    >
      <SkeletonImage
        imgPath={imgSrc}
        alt={imgAlt}
        imgWidth={1920}
        imgHeight={1080}
        priority
      />
      <Spacer size="sm" />
      <Title tag="h2" size="sm" align="center" margin="none">
        {textLabel}
      </Title>
    </Link>
  );
};
