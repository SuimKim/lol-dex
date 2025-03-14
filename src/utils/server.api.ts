import { Champion, ChampionDetail } from "@/types/shared/riot.api.types";

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
  const { data }: { data: { [key: string]: Champion } } = await res.json();
  return data;
};

export const getChampionDetail: (id: string) => Promise<{
  [key: string]: ChampionDetail;
}> = async (id) => {
  const version = await getVersion();
  const res: Response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/ko_KR/champion/${id}.json`,
    {
      cache: "no-store",
    }
  );
  const { data }: { data: { [key: string]: ChampionDetail } } =
    await res.json();
  return data;
};
