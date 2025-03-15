"use client";

import useRotation from "@/hooks/useRotation";
import ListCard from "@/components/common/ListCard";
import ListGridContainer from "@/components/common/ListGridContainer";
import Title from "@/components/common/Title";
import { CHAMPION_LIST_IMG_PATH } from "@/constants";

const RotationClientPage = () => {
  const {
    isPending,
    isError,
    error,
    maxNewUserLevel,
    rotationList,
    rotationListForNewUser,
  } = useRotation();

  if (isError) return <div>에러{`${error}`}</div>;
  if (isPending) return <div>로딩</div>;

  return (
    <>
      <Title tag="h1" size="3xl" margin="md" align="center">
        금주의 무료 챔피언
      </Title>
      <ListGridContainer>
        {rotationList!.map((item) => (
          <ListCard
            key={item.id}
            item={item}
            imgPath={`${CHAMPION_LIST_IMG_PATH}/${item.id}_0.jpg`}
          />
        ))}
      </ListGridContainer>
      <Title tag="h1" size="3xl" margin="md" align="center">
        금주의 신규유저 무료 챔피언(레벨 {maxNewUserLevel}까지)
      </Title>
      <ListGridContainer>
        {rotationListForNewUser!.map((item) => (
          <ListCard
            key={item.id}
            item={item}
            imgPath={`${CHAMPION_LIST_IMG_PATH}/${item.id}_0.jpg`}
          />
        ))}
      </ListGridContainer>
    </>
  );
};

export default RotationClientPage;
