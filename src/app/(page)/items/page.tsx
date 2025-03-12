import Title from "@/components/common/Title";
import ItemCard from "@/components/features/items/ItemCard";

interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into?: string[]; // from 대신 into로 수정
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
  maps: { [key: string]: boolean }; // number 대신 string으로 수정
  stats: { [key: string]: number }; // 동적 키로 수정
}

interface ItemData {
  type: string;
  version: string;
  data: { [key: string]: Item };
}

const page = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/ko_KR/item.json",
    {
      cache: "force-cache",
    }
  );
  const { data }: ItemData = await res.json();
  const itemList: [string, Item][] = Object.entries(data);
  return (
    <>
      <Title tag="h1" size="3xl" margin="md" align="center">
        아이템 목록
      </Title>
      <ListGridContainer>
        {itemList.map(([id, item]) => (
          <ItemCard key={id} item={item} />
        ))}
      </ListGridContainer>
    </>
  );
};

export default page;

const ListGridContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-11/12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 p-5 border-2">
      {children}
    </section>
  );
};
