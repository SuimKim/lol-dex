import type { Item } from "@/types/shared/riot.api.types";
import { getItem } from "@/utils/server.api";
import ListCard from "@/components/common/ListCard";
import ListGridContainer from "@/components/common/ListGridContainer";
import Title from "@/components/common/Title";
import { ITEM_IMG_PATH } from "@/constants";

const page = async () => {
  const itemData = await getItem();
  const itemList: Item[] = Object.values(itemData);
  return (
    <>
      <Title tag="h1" size="3xl" margin="md" align="center">
        아이템 목록
      </Title>
      <ListGridContainer>
        {itemList.map((item) => (
          <ListCard
            key={item.name}
            item={item}
            imgPath={`${ITEM_IMG_PATH}/${item.image.full}`}
          />
        ))}
      </ListGridContainer>
    </>
  );
};

export default page;
