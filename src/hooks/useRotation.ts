import { useQuery } from "@tanstack/react-query";
import type { Champion } from "@/types/shared/riot.api.types";
import type { UseRotationReturnValue } from "@/types/shared/common.types";
import { getChampionList, getRotation } from "@/utils/server.api";
import { makeRotationList } from "@/utils/makeRotationList";

const useRotation = (): UseRotationReturnValue => {
  const championQuery = useQuery({
    queryKey: ["champion"],
    queryFn: getChampionList,
  });

  const rotationQuery = useQuery({
    queryKey: ["rotation"],
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
