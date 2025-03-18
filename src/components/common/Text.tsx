import { TextProps } from "@/types/components/common.types";
/**
 * @component
 *
 * @prop {size} [size="md"] - 글자 크기 ("xl" | "sm" | "md" | "lg" | "xl")
 * @prop {align} [align="left"] - 정렬 위치 ("left" | "center" | "right")
 */
const Text = ({
  size = "md",
  align = "left",
  oneLine,
  children,
}: TextProps) => {
  const sizeStyles: Record<TextProps["size"], string> = {
    xs: "text-xs",
    sm: "text-xs lg:text-sm",
    md: "text-sm lg:text-md",
    lg: "text-md lg:text-lg",
    xl: "text-md md:text-lg lg:text-xl",
  };

  const baseStyles: string = "justify-items-center dark:text-gray-400";
  const alignStyles: string = `text-${align}`;
  const oneLineStyle: string =
    "whitespace-nowrap overflow-hidden text-ellipsis";

  if (oneLine) {
    const styles = `${baseStyles} ${sizeStyles[size]} ${alignStyles} ${oneLineStyle}`;
    return <p className={styles}>{children}</p>;
  }

  const styles = `${baseStyles} ${sizeStyles[size]} ${alignStyles}`;
  return <p className={styles}>{children}</p>;
};

export default Text;
