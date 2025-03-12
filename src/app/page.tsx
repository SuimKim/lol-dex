import Text from "@/components/Text";
import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const championsImgPath: string =
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/64008dd57fddfa0a3baad95b72e3bdd13068a97f-1920x1080.jpg";
  const rotationsImgPath: string =
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/510633f8ba622a63f02a88a96b2a28422180d735-1920x1080.jpg";
  const itemsImgPath: string =
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/universe_live/7b11239cf024358011444e7d70bb2badbb6b33e2-6000x3155.jpg";

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
        <Link href={"/champion"} className="flex flex-col items-center">
          <Image
            src={championsImgPath}
            width={500}
            height={500}
            alt="챔피언 목록"
          />
          <Text size="md" align="center">
            챔피언 목록 보기
          </Text>
        </Link>
        <Link href={"/rotation"} className="flex flex-col items-center">
          <Image
            src={rotationsImgPath}
            width={500}
            height={500}
            alt="금주 로테이션"
          />
          <Text size="md" align="center">
            금주 로테이션 확인
          </Text>
        </Link>
        <Link href={"/items"} className="flex flex-col items-center">
          <Image
            src={itemsImgPath}
            width={500}
            height={500}
            alt="아이템 목록"
          />
          <Text size="md" align="center">
            아이템 목록 보기
          </Text>
        </Link>
      </section>
    </main>
  );
}
