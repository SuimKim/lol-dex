import { ReactNode } from "react";

// "@/components/common/Text.tsx"
export type TextSize = "xs" | "sm" | "md" | "lg" | "xl";
export type TextAlign = "left" | "center" | "right";
export type TextProps = {
  size: TextSize;
  align: TextAlign;
  children: ReactNode;
};

// "@/components/common/Title.tsx"
export type TitleTagName = "h1" | "h2" | "h3" | "h4";
export type TitleSize = "xl" | "2xl" | "3xl" | "4xl" | "5xl";
export type TitleMargin = "none" | "sm" | "md" | "lg" | "xl" | "2xl";
export type TitleAlign = "left" | "center" | "right";

export type TitleProps = {
  tag: TitleTagName;
  size: TitleSize;
  margin: TitleMargin;
  align: TitleAlign;
  children: ReactNode;
};
