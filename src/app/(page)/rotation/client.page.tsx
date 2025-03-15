"use client";

import ListCard from "@/components/common/ListCard";
import ListGridContainer from "@/components/common/ListGridContainer";
import Title from "@/components/common/Title";
import { CHAMPION_LIST_IMG_PATH } from "@/constants";
import { Champion } from "@/types/shared/riot.api.types";
import { getChampionList, getRotation } from "@/utils/server.api";
import { useQuery } from "@tanstack/react-query";

const RotationClientPage = () => {
  const {
    data: championData,
    isError: championError,
    isPending: championPending,
  } = useQuery({
    queryKey: ["champion"],
    queryFn: getChampionList,
  });

  const {
    data: rotationData,
    isError: rotationError,
    isPending: rotationPending,
  } = useQuery({
    queryKey: ["rotation"],
    queryFn: getRotation,
  });
  if (championError || championPending || rotationError || rotationPending)
    return;
  if (!championData || !rotationData) return;
  const championList: Champion[] = Object.values(championData);
  const freeChampionList: Champion[] = championList.filter((item) =>
    rotationData.freeChampionIds.map(String).includes(item.key)
  );
  const freeChampionIdsForNewPlayersList: Champion[] = championList.filter(
    (item) =>
      rotationData.freeChampionIdsForNewPlayers.map(String).includes(item.key)
  );
  return (
    <>
      <Title tag="h1" size="3xl" margin="md" align="center">
        금주의 무료 챔피언
      </Title>
      <ListGridContainer>
        {freeChampionList.map((item) => (
          <ListCard
            key={item.id}
            item={item}
            imgPath={`${CHAMPION_LIST_IMG_PATH}/${item.id}_0.jpg`}
          />
        ))}
      </ListGridContainer>
      <Title tag="h1" size="3xl" margin="md" align="center">
        금주의 신규유저 무료 챔피언(레벨 {rotationData.maxNewPlayerLevel}까지)
      </Title>
      <ListGridContainer>
        {freeChampionIdsForNewPlayersList.map((item) => (
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
