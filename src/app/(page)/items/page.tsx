import ListCard from "@/components/common/ListCard";
import Title from "@/components/common/Title";
import { ITEM_IMG_PATH } from "@/constants";
import { Item, ItemData } from "@/types/shared/api/item.types";
import { ChildrenProps } from "@/types/shared/common.types";

const page = async () => {
  const res: Response = await fetch(
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
        {itemList.map(([name, item]) => (
          <ListCard
            key={name}
            item={item}
            imgPath={`${ITEM_IMG_PATH}/${item.image.full}`}
          />
        ))}
      </ListGridContainer>
    </>
  );
};

export default page;

const ListGridContainer = ({ children }: ChildrenProps) => {
  return (
    <section className="w-11/12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 p-5 border-2">
      {children}
    </section>
  );
};
