import type { Champion } from "@/types/shared/riot.api.types";
import { getChampionList, getRotation } from "@/utils/server.api";
import ListCard from "@/components/common/ListCard";
import ListGridContainer from "@/components/common/ListGridContainer";
import Title from "@/components/common/Title";
import { CHAMPION_LIST_IMG_PATH } from "@/constants";

const RotationPage = async () => {
  const championData = await getChampionList();
  const { freeChampionIds }: { [key: string]: number[] } = await getRotation();

  const championList: Champion[] = Object.values(championData);
  const rotationList: Champion[] = championList.filter((item) =>
    freeChampionIds.map(String).includes(item.key)
  );

  return (
    <>
      <Title tag="h1" size="3xl" margin="md" align="center">
        금주의 무료 챔피언
      </Title>
      <ListGridContainer>
        {rotationList.map((item) => (
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

export default RotationPage;
