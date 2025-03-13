import { ReactNode } from "react";

// "@/components/common/Text.tsx"
export type TextSize = "xs" | "sm" | "md" | "lg" | "xl";
export type TextAlign = "left" | "center" | "right";
export type TextProps = {
  size: TextSize;
  align: TextAlign;
  children: ReactNode;
};
