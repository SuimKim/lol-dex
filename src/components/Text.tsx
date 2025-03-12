import { ReactNode } from "react";
/**
 * @component
 *
 * @param {Size} [size="xl"] - 글자 크기 ("xl" | "2xl" | "3xl" | "4xl" | "5xl")
 * @param {Align} [align="left"] - 정렬 위치 ("left" | "center" | "right")
 */
type Size = "xs" | "sm" | "md" | "lg" | "xl";
type Align = "left" | "center" | "right";

type titleProps = {
  size: Size;
  align: Align;
  children: ReactNode;
};

const Text = ({ size = "md", align = "left", children }: titleProps) => {
  const baseStyles = "justify-items-center";

  const sizeStyles: Record<Size, string> = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
  };

  const alignStyles: string = `text-${align}`;

  const styles = `${baseStyles} ${sizeStyles[size]} ${alignStyles}`;

  return <p className={styles}>{children}</p>;
};

export default Text;
