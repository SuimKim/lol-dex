import Image from "next/image";
import type { ChildrenProps } from "@/types/shared/common.types";
import type { ListCardProps } from "@/types/components/common.types";
import Title from "./Title";
import Text from "./Text";

const ListCard = ({ item, imgPath, imgHeight, imgWidth }: ListCardProps) => {
  return (
    <CardContainer>
      <Image
        src={imgPath}
        width={imgHeight}
        height={imgWidth}
        alt="아이템 이미지"
        className="w-full"
      />
      <ContentsContainer>
        <Title tag="h2" size="sm" align="left" margin="none">
          {item.name}
        </Title>
        <Text size="md" align="left" oneLine={true}>
          {"title" in item ? item.title : item.plaintext}
        </Text>
      </ContentsContainer>
    </CardContainer>
  );
};

export default ListCard;

const CardContainer = ({ children }: ChildrenProps) => {
  return <div className="p-2 md:p-4 lg:p-6 flex flex-col">{children}</div>;
};

const ContentsContainer = ({ children }: ChildrenProps) => {
  return <div className="flex flex-col gap-2 p-2">{children}</div>;
};
