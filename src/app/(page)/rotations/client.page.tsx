"use client";

import Link from "next/link";
import useRotation from "@/hooks/useRotation";
import Loading from "@/app/loading";
import ListCard from "@/components/common/ListCard";
import ListGridContainer from "@/components/common/ListGridContainer";
import Title from "@/components/common/Title";
import Spacer from "@/components/common/Spacer";
import { CHAMPION, CHAMPION_LIST_IMG_PATH } from "@/constants";

const RotationClientPage = () => {
  const {
    isPending,
    isError,
    error,
    maxNewUserLevel,
    rotationList,
    rotationListForNewUser,
  } = useRotation();

  if (isError) throw error;
  if (isPending) return <Loading />;

  return (
    <>
      <Spacer size="md" />
      <Title tag="h1" size="xl" margin="none" align="center">
        금주의 무료 챔피언
      </Title>
      <ListGridContainer>
        {rotationList!.map((item) => (
          <Link href={`${CHAMPION}/${item.id}`} key={item.id}>
            <ListCard
              item={item}
              imgPath={`${CHAMPION_LIST_IMG_PATH}/${item.id}_0.jpg`}
              imgHeight={560}
              imgWidth={308}
            />
          </Link>
        ))}
      </ListGridContainer>
      <Title tag="h1" size="xl" margin="lg" align="center">
        금주의 신규유저 무료 챔피언(레벨 {maxNewUserLevel}까지)
      </Title>
      <ListGridContainer>
        {rotationListForNewUser!.map((item) => (
          <Link href={`${CHAMPION}/${item.id}`} key={item.id}>
            <ListCard
              item={item}
              imgPath={`${CHAMPION_LIST_IMG_PATH}/${item.id}_0.jpg`}
              imgHeight={560}
              imgWidth={308}
            />
          </Link>
        ))}
      </ListGridContainer>
      <Spacer size="sm" />
    </>
  );
};

export default RotationClientPage;
