import { Champion, ChampionData } from "@/types/shared/api/champion.types";

const getVersion: () => Promise<string[]> = async () => {
  const res: Response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const data: string[] = await res.json();
  return data;
};

export const getChampionList: () => Promise<{
  [key: string]: Champion;
}> = async () => {
  const version = await getVersion();
  const res: Response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const { data }: ChampionData = await res.json();
  return data;
};
