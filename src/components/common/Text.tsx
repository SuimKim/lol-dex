import { TextProps } from "@/types/components/common.types";
/**
 * @component
 *
 * @prop {size} [size="md"] - 글자 크기 ("xl" | "sm" | "md" | "lg" | "xl")
 * @prop {align} [align="left"] - 정렬 위치 ("left" | "center" | "right")
 */
const Text = ({ size = "md", align = "left", children }: TextProps) => {
  const sizeStyles: Record<TextProps["size"], string> = {
    xs: "text-xs",
    sm: "text-xs lg:text-sm",
    md: "text-sm lg:text-md",
    lg: "text-md lg:text-lg",
    xl: "text-md md:text-lg lg:text-xl",
  };

  const baseStyles =
    "justify-items-center whitespace-nowrap overflow-hidden text-ellipsis";

  const alignStyles: string = `text-${align}`;

  const styles = `${baseStyles} ${sizeStyles[size]} ${alignStyles}`;

  return <p className={styles}>{children}</p>;
};

export default Text;
