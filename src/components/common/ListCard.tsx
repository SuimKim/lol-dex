import Image from "next/image";
import React from "react";
import Title from "./Title";
import Text from "./Text";

type Item = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: { [key: string]: number };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
  partype: string;
  stats: { [key: string]: number };
};
type CardsProps = {
  item: Item;
};
const ListCard = ({ item }: CardsProps) => {
  const imgPath = `https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${item.image.full}`;
  return (
    <CardContainer>
      <Image src={imgPath} width={150} height={150} alt="아이템 이미지" />
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
