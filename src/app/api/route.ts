import { ChampionRotation } from "@/types/shared/riot.api.types";
import { NextResponse } from "next/server";

export const GET = async () => {
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
  const data: ChampionRotation = await res.json();
  return NextResponse.json(data);
};
