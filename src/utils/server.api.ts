import type { fetchReturnValue } from "@/types/shared/common.types";
import type {
  Champion,
  ChampionDetail,
  ChampionRotation,
  Item,
} from "@/types/shared/riot.api.types";
import { GET_ITEMS_URL, GET_VERSION_URL, MY_BUILD_URL } from "@/constants";

const getVersion = async (): Promise<string> => {
  const res: Response = await fetch(GET_VERSION_URL);
  const data: string[] = await res.json();
  const BASE_URL: string = `https://ddragon.leagueoflegends.com/cdn/${data[0]}/data/ko_KR`;
  return BASE_URL;
};

export const getChampionList = async (): Promise<
  fetchReturnValue<Champion>
> => {
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
  const BASE_URL = await getVersion();
  const res: Response = await fetch(`${BASE_URL}/champion/${id}.json`, {
    cache: "no-store",
  });
  const { data }: { data: fetchReturnValue<ChampionDetail> } = await res.json();
  return data;
};

export const getRotation = async (): Promise<ChampionRotation> => {
  const res: Response = await fetch(MY_BUILD_URL, {
    method: "GET",
  });
  const data: ChampionRotation = await res.json();
  return data;
};

export const getItem = async (): Promise<fetchReturnValue<Item>> => {
  const res: Response = await fetch(GET_ITEMS_URL, {
    cache: "force-cache",
  });
  const { data }: { data: fetchReturnValue<Item> } = await res.json();
  return data;
};
