import { MainCardData } from "./types/pages/Home.types";

export const ITEM_IMG_PATH: string =
  "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item";

export const CHAMPION_LIST_IMG_PATH: string =
  "https://ddragon.leagueoflegends.com/cdn/img/champion/loading";

export const CHAMPION_DETAIL_IMG_PATH: string =
  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash";

export const SPELL_IMG_PATH: string =
  "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/spell";

export const HOME: string = "/";
export const CHAMPION: string = "/champions";
export const ITEMS: string = "/items";
export const ROTATIONS: string = "/rotations";

export const MAIN_CARD_DATA: MainCardData[] = [
  {
    linkHref: CHAMPION,
    imgSrc:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/64008dd57fddfa0a3baad95b72e3bdd13068a97f-1920x1080.jpg",
    imgAlt: "챔피언 목록",
    textLabel: "챔피언 목록 보기",
  },
  {
    linkHref: ROTATIONS,
    imgSrc:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/510633f8ba622a63f02a88a96b2a28422180d735-1920x1080.jpg",
    imgAlt: "금주 로테이션",
    textLabel: "금주 로테이션 확인",
  },
  {
    linkHref: ITEMS,
    imgSrc:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7d6799d60e7029c4aa6a1d168ce7560b15ce5adf-1920x1080.jpg",
    imgAlt: "아이템 목록",
    textLabel: "아이템 목록 보기",
  },
];

export const QUERY_KEY = {
  CHAMPION: ["champion"],
  ROTATION: ["rotation"],
};

export const GET_VERSION_URL: string =
  "https://ddragon.leagueoflegends.com/api/versions.json";

export const GET_ITEMS_URL: string =
  "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/ko_KR/item.json";

export const MY_BUILD_URL: string = "https://lol-dex-suim.vercel.app/api";
