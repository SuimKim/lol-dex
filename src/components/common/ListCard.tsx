import Image from "next/image";
import React from "react";
import Title from "./Title";
import Text from "./Text";

const ListCard = () => {
  //   const imgPath = `https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${item.image.full}`;
  return (
    <CardContainer>
      <Image src={""} width={150} height={150} alt="아이템 이미지" />
      <ContentsContainer>
        <Title tag="h2" size="xl" align="left" margin="none">
          이름 들어갈 곳
        </Title>
        <Text size="md" align="left">
          설명 들어갈 곳
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
