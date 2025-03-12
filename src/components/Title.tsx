import { ReactNode } from "react";

/**
 * 제목 컴포넌트입니다. font-bold 속성이 기본 설정되어있습니다.
 * @component
 *
 * @prop {string} [size] - 글자 크기 ( "xl" | "2xl" | "3xl" | "4xl" | "5xl" )
 * @prop {string} [margin] - 마진 크기 ( "sm" | "md" | "lg" | "xl" | "2xl" )
 */
type Size = "xl" | "2xl" | "3xl" | "4xl" | "5xl";
type Margin = "sm" | "md" | "lg" | "xl" | "2xl";

type titleProps = {
  size: Size;
  margin: Margin;
  children: ReactNode;
};

const Title = ({ size, margin, children }: titleProps) => {
  const baseStyles = "font-bold";

  const sizeStyles: Record<Size, string> = {
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  };

  const marginStyles: Record<Margin, string> = {
    sm: "m-2",
    md: "m-4",
    lg: "m-6",
    xl: "m-8",
    "2xl": "m-10",
  };

  const styles = `${baseStyles} ${sizeStyles[size]} ${marginStyles[margin]}`;

  return <h1 className={styles}>{children}</h1>;
};

export default Title;
