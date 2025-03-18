import { useQuery } from "@tanstack/react-query";
import type { Champion } from "@/types/shared/riot.api.types";
import type { UseRotationReturnValue } from "@/types/shared/common.types";
import { getChampionList, getRotation } from "@/utils/server.api";
import { makeRotationList } from "@/utils/makeRotationList";
import { QUERY_KEY } from "@/constants";

/**
 * 전체 챔피언 리스트와 로테이션 아이디를 받아와서 로테이션 항목에 해당하는 챔피언 리스트를 반환하는 훅입니다.
 * useQuery 훅을 사용하여 데이터를 받아온 후, makeRotationList 함수로 리스트를 필터링합니다.
 * rotationQuery 훅은 championQuery 패칭에 실패하면 실행하지 않습니다.
 * isPending, isError, error는 각각 하나의 상수로 반환합니다.(두 로직이 모두 실패하는 경우는 없기에 하나로 관리가 가능합니다.)
 * 각 쿼리의 데이터가 없는 경우에는 early return 하여 위의 반환값을 전달합니다.
 * 패칭이 완료되어 데이터를 받아온 경우에는 makeRotationList로 데이터를 가공 후 반환값을 전달합니다.
 *
 * @returns { isPending, isError, error, rotationList, rotationListForNewUser, maxNewUserLevel }
 */
const useRotation = (): Partial<UseRotationReturnValue> => {
  const championQuery = useQuery({
    queryKey: QUERY_KEY.CHAMPION,
    queryFn: getChampionList,
  });

  const rotationQuery = useQuery({
    queryKey: QUERY_KEY.ROTATION,
    queryFn: getRotation,
    enabled: !!championQuery.data, // championQuery에서 data 못 불러왔으면 실행 안 함
  });

  const isPending = championQuery.isPending || rotationQuery.isPending;
  const isError = championQuery.isError || rotationQuery.isError;
  const error = championQuery.error || rotationQuery.error;
  const championData = championQuery.data;
  const rotationData = rotationQuery.data;

  if (!championData || !rotationData) {
    return { isPending, isError, error };
  }

  const championList: Champion[] = Object.values(championData);

  const rotationList = makeRotationList(
    championList,
    rotationData.freeChampionIds
  );

  const rotationListForNewUser = makeRotationList(
    championList,
    rotationData.freeChampionIdsForNewPlayers
  );

  const maxNewUserLevel = rotationData.maxNewPlayerLevel;

  return {
    isPending,
    isError,
    error,
    rotationList,
    rotationListForNewUser,
    maxNewUserLevel,
  };
};

export default useRotation;
