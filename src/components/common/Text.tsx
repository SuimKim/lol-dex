import { TextProps } from "@/types/components/common.types";
/**
 * @component
 *
 * @prop {size} [size="xl"] - 글자 크기 ("xl" | "2xl" | "3xl" | "4xl" | "5xl")
 * @prop {align} [align="left"] - 정렬 위치 ("left" | "center" | "right")
 */
const Text = ({ size = "md", align = "left", children }: TextProps) => {
  const baseStyles = "justify-items-center";

  const sizeStyles: Record<TextProps["size"], string> = {
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
