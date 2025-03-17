import type { fetchReturnValue } from "@/types/shared/common.types";
import type {
  Champion,
  ChampionDetail,
  ChampionRotation,
  Item,
} from "@/types/shared/riot.api.types";

const getVersion = async (): Promise<string[]> => {
  console.log("버전 API 호출 시간:", new Date().toISOString());
  const res: Response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const data: string[] = await res.json();
  return data;
};

export const getChampionList = async (): Promise<
  fetchReturnValue<Champion>
> => {
  console.log("챔피언 리스트 API 호출 시간:", new Date().toISOString());
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
  console.log("디테일 API 호출 시간:", new Date().toISOString());
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
  console.log("로테이션 번호 API 호출 시간:", new Date().toISOString());
  const res: Response = await fetch("https://lol-dex-two.vercel.app/api", {
    method: "GET",
  });
  const data: ChampionRotation = await res.json();
  return data;
};

export const getItem = async (): Promise<fetchReturnValue<Item>> => {
  console.log("아이템 API 호출 시간:", new Date().toISOString());
  const res: Response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/ko_KR/item.json",
    {
      cache: "force-cache",
    }
  );
  const { data }: { data: fetchReturnValue<Item> } = await res.json();
  return data;
};
