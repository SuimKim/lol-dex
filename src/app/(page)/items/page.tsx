import ListCard from "@/components/common/ListCard";
import ListGridContainer from "@/components/common/ListGridContainer";
import Title from "@/components/common/Title";
import { Item, ItemData } from "@/types/shared/api/item.types";
import { ITEM_IMG_PATH } from "@/constants";

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
