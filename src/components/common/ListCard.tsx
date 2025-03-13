import Link from "next/link";
import Image from "next/image";
import Title from "./Title";
import Text from "./Text";
import { Champion } from "@/types/shared/api/champion.types";
import { ChildrenProps } from "@/types/shared/common.types";

type CardsProps = {
  item: Champion;
};
const ListCard = ({ item }: CardsProps) => {
  const imgPath = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.id}_0.jpg`;
  return (
    <CardContainer pathId={item.id}>
      <Image src={imgPath} width={300} height={150} alt="아이템 이미지" />
      <ContentsContainer>
        <Title tag="h2" size="xl" align="left" margin="none">
          {item.name}
        </Title>
        <Text size="md" align="left">
          {item.title}
        </Text>
      </ContentsContainer>
    </CardContainer>
  );
};

export default ListCard;

const CardContainer = ({ children, pathId }: ChildrenProps) => {
  return (
    <Link
      href={`/champions/${pathId}`}
      className="border-2 border-black flex flex-col items-center"
    >
      {children}
    </Link>
  );
};

const ContentsContainer = ({ children }: ChildrenProps) => {
  return <div className="flex flex-col gap-2 p-2">{children}</div>;
};
