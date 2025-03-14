import { Champion } from "../shared/api/champion.types";
import { Item } from "../shared/api/item.types";

export type ListCardProps = {
  item: Champion | Item;
  imgPath: string;
};
