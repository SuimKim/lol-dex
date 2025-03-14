import type { fetchReturnValue } from "@/types/shared/common.types";
import type {
  Champion,
  ChampionDetail,
  ChampionRotation,
  Item,
} from "@/types/shared/riot.api.types";

const getVersion: () => Promise<string[]> = async () => {
  const res: Response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const data: string[] = await res.json();
  return data;
};

export const getChampionList: () => Promise<
  fetchReturnValue<Champion>
> = async () => {
  const version = await getVersion();
  const res: Response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const { data }: { data: fetchReturnValue<Champion> } = await res.json();
  return data;
};

export const getChampionDetail: (
  id: string
) => Promise<fetchReturnValue<ChampionDetail>> = async (id) => {
  const version = await getVersion();
  const res: Response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/ko_KR/champion/${id}.json`,
    {
      cache: "no-store",
    }
  );
  const { data }: { data: fetchReturnValue<ChampionDetail> } = await res.json();
  return data;
};

export const getRotation: () => Promise<ChampionRotation> = async () => {
  const apiKey = process.env.RIOT_API_KEY;
  if (!apiKey) throw new Error("RIOT_API_KEY가 설정되지 않았습니다");

  const res: Response = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": apiKey,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getItem: () => Promise<fetchReturnValue<Item>> = async () => {
  const res: Response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/ko_KR/item.json",
    {
      cache: "force-cache",
    }
  );
  const { data }: { data: fetchReturnValue<Item> } = await res.json();
  return data;
};
