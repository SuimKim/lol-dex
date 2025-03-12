"use client";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import Image from "next/image";

interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into?: string[];
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
  maps: { [key: string]: boolean };
  stats: {
    [key: string]: number;
  };
  depth?: number;
}
interface ItemCardProps {
  id: string;
  item: Item;
}

const ItemCard = ({ id, item }: ItemCardProps) => {
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

type Props = {
  children: React.ReactNode;
};

const CardContainer = ({ children }: Props) => {
  return (
    <div className="border-2 border-black flex flex-col items-center">
      {children}
    </div>
  );
};

const ContentsContainer = ({ children }: Props) => {
  return <div className="flex flex-col gap-2 p-2">{children}</div>;
};
