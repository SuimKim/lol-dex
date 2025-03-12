import Text from "@/components/common/Text";
import Title from "@/components/common/Title";

const ItemCard = () => {
  return (
    <CardContainer>
      <div className="bg-gray-500 h-32">이미지가 들어갈</div>
      <ContentsContainer>
        <Title tag="h2" size="xl" align="left" margin="none">
          장화
        </Title>
        <Text size="md" align="left">
          이동 속도가 약간 증가합니다.
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
  return <div className="border-2 border-black">{children}</div>;
};

const ContentsContainer = ({ children }: Props) => {
  return <div className="flex flex-col gap-2 p-2">{children}</div>;
};
