import Link from "next/link";
import Image from "next/image";
import Title from "./Title";
import Text from "./Text";
import { ChildrenProps } from "@/types/shared/common.types";
import { ItemCardProps } from "@/types/components/ItemCard.types";
import { Champion } from "@/types/shared/api/champion.types";

const ListCard = ({ item, imgPath }: ItemCardProps) => {
  return (
    <CardContainer>
      <Image src={imgPath} width={300} height={150} alt="아이템 이미지" />
      <ContentsContainer>
        <Title tag="h2" size="xl" align="left" margin="none">
          {item.name}
        </Title>
        <Text size="md" align="left">
          {"title" in item ? item.title : item.plaintext}
        </Text>
      </ContentsContainer>
    </CardContainer>
  );
};

export default ListCard;

const CardContainer = ({ children }: ChildrenProps) => {
  return (
    <div className="border-2 border-black flex flex-col items-center">
      {children}
    </div>
  );
};

const ContentsContainer = ({ children }: ChildrenProps) => {
  return <div className="flex flex-col gap-2 p-2">{children}</div>;
};
