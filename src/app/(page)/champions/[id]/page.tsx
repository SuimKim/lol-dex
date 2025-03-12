type Params = {
  id: string;
};
type test = {
  type: string;
  format: string;
  version: string;
  data: {
    Aatrox: {
      id: string;
      key: string;
      name: string;
      title: string;
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
      skins: {
        id: string;
        num: number;
        name: string;
        chromas: false;
      }[];
      lore: string;
      blurb: string;
      allytips: string[];
      enemytips: string[];
      tags: string[];
      partype: string;
      info: { [key: string]: number };
      stats: { [key: string]: number };
      spells: {
        id: string;
        name: string;
        description: string;
        tooltip: string;
        leveltip: { [key: string]: string[] };
        maxrank: number;
        cooldown: number[];
        cooldownBurn: string;
        cost: number[];
        costBurn: string;
        datavalues: {};
        effect: (number[] | null)[];
        effectBurn: (string | null)[];
        vars: [];
        costType: string;
        maxammo: string;
        range: number[];
        rangeBurn: string;
        image: {
          full: string;
          sprite: string;
          group: string;
          x: number;
          y: number;
          w: number;
          h: number;
        };
        resource: string;
      }[];
      passive: {
        name: string;
        description: string;
        image: {
          full: string;
          sprite: string;
          group: string;
          x: number;
          y: number;
          w: number;
          h: number;
        };
      };
      recommended: [];
    };
  };
};

const DetailPage = async ({ params }: { params: Params }) => {
  const id: string = params.id;
  const versionRes: Response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const version: string[] = await versionRes.json();
  const res: Response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/ko_KR/champion/${id}.json`
  );
  const { data: champion }: test = await res.json();

  return <>{id}의 상세페이지</>;
};

export default DetailPage;
