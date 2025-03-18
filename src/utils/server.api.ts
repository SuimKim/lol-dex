import type { fetchReturnValue } from "@/types/shared/common.types";
import type {
  Champion,
  ChampionDetail,
  ChampionRotation,
  Item,
} from "@/types/shared/riot.api.types";
import { GET_ITEMS_URL, GET_VERSION_URL, MY_BUILD_URL } from "@/constants";

const getVersion = async (): Promise<string> => {
  console.log("버전 API 호출 시간:", new Date().toISOString());
  const res: Response = await fetch(GET_VERSION_URL);
  const data: string[] = await res.json();
  const BASE_URL: string = `https://ddragon.leagueoflegends.com/cdn/${data[0]}/data/ko_KR`;
  return BASE_URL;
};

export const getChampionList = async (): Promise<
  fetchReturnValue<Champion>
> => {
  console.log("챔피언 리스트 API 호출 시간:", new Date().toISOString());
  const BASE_URL = await getVersion();
  const res: Response = await fetch(`${BASE_URL}/champion.json`, {
    next: {
      revalidate: 86400,
    },
  });
  const { data }: { data: fetchReturnValue<Champion> } = await res.json();
  return data;
};

export const getChampionDetail = async (
  id: string
): Promise<fetchReturnValue<ChampionDetail>> => {
  console.log("디테일 API 호출 시간:", new Date().toISOString());
  const BASE_URL = await getVersion();
  const res: Response = await fetch(`${BASE_URL}/champion/${id}.json`, {
    cache: "no-store",
  });
  const { data }: { data: fetchReturnValue<ChampionDetail> } = await res.json();
  return data;
};

export const getRotation = async (): Promise<ChampionRotation> => {
  console.log("로테이션 번호 API 호출 시간:", new Date().toISOString());
  const res: Response = await fetch(MY_BUILD_URL, {
    method: "GET",
  });
  const data: ChampionRotation = await res.json();
  return data;
};

export const getItem = async (): Promise<fetchReturnValue<Item>> => {
  console.log("아이템 API 호출 시간:", new Date().toISOString());
  const res: Response = await fetch(GET_ITEMS_URL, {
    cache: "force-cache",
  });
  const { data }: { data: fetchReturnValue<Item> } = await res.json();
  return data;
};
