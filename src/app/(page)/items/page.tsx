import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import { ReactNode } from "react";

const page = () => {
  return (
    <>
      <Title tag="h1" size="3xl" margin="md" align="center">
        아이템 목록
      </Title>
      <ListGridContainer>
        <div className="border-2 border-black">
          <div className="bg-gray-500 h-32">이미지가 들어갈</div>
          <div className="flex flex-col gap-2 p-2">
            <Title tag="h2" size="xl" align="left" margin="none">
              장화
            </Title>
            <Text size="md" align="left">
              이동 속도가 약간 증가합니다.
            </Text>
          </div>
        </div>
      </ListGridContainer>
    </>
  );
};

export default page;

const ListGridContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-11/12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 p-5 border-2">
      {children}
    </section>
  );
};
