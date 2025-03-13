import { ReactNode } from "react";

// "@/components/common/Text.tsx"
export type TextProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  align: "left" | "center" | "right";
  children: ReactNode;
};

// "@/components/common/Title.tsx"
export type TitleProps = {
  tag: "h1" | "h2" | "h3" | "h4";
  size: "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  margin: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  align: "left" | "center" | "right";
  children: ReactNode;
};
