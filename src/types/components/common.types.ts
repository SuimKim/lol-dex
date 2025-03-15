import { Champion, Item } from "../shared/riot.api.types";
import { ChildrenProps } from "../shared/common.types";

// "@/components/common/Text.tsx"
export type TextProps = ChildrenProps & {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  align: "left" | "center" | "right";
};

// "@/components/common/Title.tsx"
export type TitleProps = ChildrenProps & {
  tag: "h1" | "h2" | "h3" | "h4";
  size: "sm" | "md" | "lg" | "xl";
  margin: "none" | "sm" | "md" | "lg";
  align: "left" | "center" | "right";
};

// "@/components/common/ListCard.tsx"
export type ListCardProps = {
  item: Champion | Item;
  imgPath: string;
  imgHeight: number;
  imgWidth: number;
};
