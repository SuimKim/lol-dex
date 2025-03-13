import { ChildrenProps } from "../shared/common.types";

// "@/components/common/Text.tsx"
export type TextProps = ChildrenProps & {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  align: "left" | "center" | "right";
};

// "@/components/common/Title.tsx"
export type TitleProps = ChildrenProps & {
  tag: "h1" | "h2" | "h3" | "h4";
  size: "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  margin: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  align: "left" | "center" | "right";
};
