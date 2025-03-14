import type { Champion } from "@/types/shared/api/champion.types";
import { getChampionList } from "@/utils/server.api";
import ListCard from "@/components/common/ListCard";
import ListGridContainer from "@/components/common/ListGridContainer";
import Title from "@/components/common/Title";
import { CHAMPION_LIST_IMG_PATH } from "@/constants";

const ChampionPage = async () => {
  const championData = await getChampionList();
  const itemList: Champion[] = Object.values(championData);

  return (
    <>
      <Title tag="h1" size="3xl" margin="md" align="center">
        챔피언 목록
      </Title>
      <ListGridContainer>
        {itemList.map((item) => (
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

export default ChampionPage;
