import type { fetchReturnValue } from "@/types/shared/common.types";
import type {
  Champion,
  ChampionDetail,
  ChampionRotation,
  Item,
} from "@/types/shared/riot.api.types";

const getVersion = async (): Promise<string[]> => {
  const res: Response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const data: string[] = await res.json();
  return data;
};

export const getChampionList = async (): Promise<
  fetchReturnValue<Champion>
> => {
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

export const getChampionDetail = async (
  id: string
): Promise<fetchReturnValue<ChampionDetail>> => {
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

export const getRotation = async (): Promise<ChampionRotation> => {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;
  if (!apiKey) throw new Error("RIOT_API_KEY가 설정되지 않았습니다.");

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

export const getItem = async (): Promise<fetchReturnValue<Item>> => {
  const res: Response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/ko_KR/item.json",
    {
      cache: "force-cache",
    }
  );
  const { data }: { data: fetchReturnValue<Item> } = await res.json();
  return data;
};
