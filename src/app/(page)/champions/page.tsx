import { Champion, ChampionData } from "@/types/pages/champion.types";
import ListCard from "@/components/common/ListCard";
import Title from "@/components/common/Title";

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
        {itemList.map((item) => (
          <ListCard key={item[1].id} item={item[1]} />
        ))}
      </ListGridContainer>
    </>
  );
};

export default ChampionPage;

const ListGridContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-11/12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 p-5 border-2">
      {children}
    </section>
  );
};
