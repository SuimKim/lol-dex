"use client";

import Link from "next/link";
import useRotation from "@/hooks/useRotation";
import Loading from "@/app/loading";
import ListCard from "@/components/common/ListCard";
import ListGridContainer from "@/components/common/ListGridContainer";
import Title from "@/components/common/Title";
import Spacer from "@/components/common/Spacer";
import { CHAMPION, CHAMPION_LIST_IMG_PATH } from "@/constants";
import { useEffect, useState } from "react";
import { Champion } from "@/types/shared/riot.api.types";
import Text from "@/components/common/Text";

const RotationClientPage = () => {
  const {
    isPending,
    isError,
    error,
    maxNewUserLevel,
    rotationList,
    rotationListForNewUser,
  } = useRotation();

  const [viewList, setViewList] = useState<Champion[]>([]);
  const [isForNewUserList, setIsForNewUserList] = useState<boolean>(false); // 최초는 rotationList

  useEffect(() => {
    if (rotationList && viewList.length === 0) {
      setViewList(rotationList); // 빈 리스트일 때만 설정
    }
  }, [rotationList, viewList]);

  const handleChangeList = () => {
    if (isForNewUserList) {
      setViewList(rotationList || []);
      setIsForNewUserList(false);
    } else {
      setViewList(rotationListForNewUser || []);
      setIsForNewUserList(true);
    }
  };

  if (isError) throw error;
  if (isPending) return <Loading />;

  return (
    <>
      <Spacer size="lg" />
      <Title tag="h1" size="xl" margin="none" align="center">
        {!isForNewUserList
          ? "금주의 무료 챔피언"
          : `신규유저 전용(레벨 ${maxNewUserLevel}까지)`}
      </Title>
      <div
        className="hover:text-blue-500 cursor-pointer pt-3"
        onClick={handleChangeList}
      >
        <Text size="lg" align="center" oneLine>
          {isForNewUserList
            ? "👉🏻 금주의 무료 챔피언"
            : ` 👉🏻 신규유저 전용(레벨 ${maxNewUserLevel}까지)`}
        </Text>
      </div>
      <ListGridContainer>
        {viewList.map((item) => (
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
