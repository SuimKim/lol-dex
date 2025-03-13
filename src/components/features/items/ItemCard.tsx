import Image from "next/image";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import { ChildrenProps } from "@/types/shared/common.types";
import { Item } from "@/types/pages/item.types";

type ItemCardProps = {
  item: Item;
};

const ItemCard = ({ item }: ItemCardProps) => {
  const imgPath = `https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${item.image.full}`;
  return (
    <CardContainer>
      <Image src={imgPath} width={150} height={150} alt="아이템 이미지" />
      <ContentsContainer>
        <Title tag="h2" size="xl" align="left" margin="none">
          {item.name}
        </Title>
        <Text size="md" align="left">
          {item.plaintext}
        </Text>
      </ContentsContainer>
    </CardContainer>
  );
};

export default ItemCard;

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
