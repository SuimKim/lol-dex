import Link from "next/link";
import type { Champion } from "@/types/shared/riot.api.types";
import { getChampionList } from "@/utils/server.api";
import ListCard from "@/components/common/ListCard";
import ListGridContainer from "@/components/common/ListGridContainer";
import Title from "@/components/common/Title";
import Spacer from "@/components/common/Spacer";
import { CHAMPION, CHAMPION_LIST_IMG_PATH } from "@/constants";

const ChampionPage = async () => {
  const championData = await getChampionList();
  const championList: Champion[] = Object.values(championData);

  return (
    <>
      <Spacer size="lg" />
      <Title tag="h1" size="xl" margin="none" align="center">
        챔피언 목록
      </Title>
      <ListGridContainer>
        {championList.map((item) => (
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

export default ChampionPage;
