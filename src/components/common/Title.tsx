import { TitleProps } from "@/types/components/common.types";
/**
 * 제목 컴포넌트입니다. font-bold 속성이 기본 설정되어 있습니다.
 * @component
 * @prop {tag} tag - 태그 종류 ("h1" | "h2" | "h3" | "h4")
 * @prop {size} [size="xl"] - 글자 크기 ("xl" | "2xl" | "3xl" | "4xl" | "5xl")
 * @prop {margin} [margin="none"] - 마진 크기 ("none" | "sm" | "md" | "lg" | "xl" | "2xl")
 * @prop {align} [align="left"] - 정렬 위치 ("left" | "center" | "right")
 */

const Title = ({
  tag,
  size = "xl",
  margin = "none",
  align = "left",
  children,
}: TitleProps) => {
  const Tag = tag;

  const sizeStyles: Record<TitleProps["size"], string> = {
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  };

  const marginStyles: Record<TitleProps["margin"], string> = {
    none: "",
    sm: "m-2",
    md: "m-4",
    lg: "m-6",
    xl: "m-8",
    "2xl": "m-10",
  };

  const alignStyles = `text-${align}`;

  const baseStyles = "font-bold justify-items-center";

  const styles = `${baseStyles} ${sizeStyles[size]} ${marginStyles[margin]} ${alignStyles}`;

  return <Tag className={styles}>{children}</Tag>;
};

export default Title;
