import { Champion, ChampionRotation } from "@/types/shared/riot.api.types";

/**
 * 챔피언 리스트에서 로테이션 항목에 해당하는 챔피언 리스트를 필터링하여 반환합니다.
 * 각 챔피언 항목의 key가 로테이션 옵션 배열이 포함하고 있는지를 비교하여 필터링합니다.
 * 로테이션 옵션은 number[]에서 string[]으로 변환하여 비교합니다.
 *
 * @param { Champion[] } championList - 모든 챔피언이 포함된 배열
 * @param { number[] } rotationOption - RotationChampion의 freeChampionIds 또는 freeChampionIdsForNewPlayers 배열
 * @returns { Champion[] } 로테이션 항목에 포함되는 Champion 배열
 */
export const makeRotationList = (
  championList: Champion[],
  rotationOption:
    | ChampionRotation["freeChampionIds"]
    | ChampionRotation["freeChampionIdsForNewPlayers"]
): Champion[] => {
  const rotationList: Champion[] = championList.filter((item) =>
    rotationOption.map(String).includes(item.key)
  );
  return rotationList;
};
