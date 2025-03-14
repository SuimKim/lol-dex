import ListCard from "@/components/common/ListCard";
import ListGridContainer from "@/components/common/ListGridContainer";
import Title from "@/components/common/Title";
import { CHAMPION_LIST_IMG_PATH } from "@/constants";
import { Champion, ChampionData } from "@/types/shared/api/champion.types";

const ChampionPage = async () => {
  const versionRes: Response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const version: string[] = await versionRes.json();
  const res: Response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data }: ChampionData = await res.json();
  const itemList: [string, Champion][] = Object.entries(data);

  return (
    <>
      <Title tag="h1" size="3xl" margin="md" align="center">
        챔피언 목록
      </Title>
      <ListGridContainer>
        {itemList.map(([name, item]) => (
          <ListCard
            key={name}
            item={item}
            imgPath={`${CHAMPION_LIST_IMG_PATH}/${item.id}_0.jpg`}
          />
        ))}
      </ListGridContainer>
    </>
  );
};

export default ChampionPage;
