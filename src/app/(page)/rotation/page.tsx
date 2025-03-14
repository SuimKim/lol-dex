import ListCard from "@/components/common/ListCard";
import Title from "@/components/common/Title";
import { CHAMPION_LIST_IMG_PATH } from "@/constants";
import { Champion, ChampionData } from "@/types/shared/api/champion.types";
import { ChildrenProps } from "@/types/shared/common.types";

const RotationPage = async () => {
  const apiKey = process.env.RIOT_API_KEY;
  if (!apiKey) throw new Error("RIOT_API_KEY가 설정되지 않았습니다");
  const rotationRes: Response = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations", // v4로 업데이트
    {
      headers: {
        "X-Riot-Token": apiKey,
      },
    }
  );

  const { freeChampionIds }: { [key: string]: number[] } =
    await rotationRes.json();
  const versionRes: Response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const version: string[] = await versionRes.json();
  const res: Response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/ko_KR/champion.json`
  );
  const { data }: ChampionData = await res.json();
  const itemList: [string, Champion][] = Object.entries(data);

  const test: [string, Champion][] = itemList.filter(([id, item]) =>
    freeChampionIds.map(String).includes(item.key)
  );
  console.log("test", test);

  return (
    <>
      <Title tag="h1" size="3xl" margin="md" align="center">
        금주의 무료 챔피언
      </Title>
      <ListGridContainer>
        {test.map(([name, item]) => (
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

export default RotationPage;

const ListGridContainer = ({ children }: ChildrenProps) => {
  return (
    <section className="w-11/12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 p-5 border-2">
      {children}
    </section>
  );
};
