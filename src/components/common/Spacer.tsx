import React from "react";

const Spacer = ({ size }: { size: string }) => {
  const sizeStyles: Record<string, string> = {
    sm: "h-5",
    md: "h-10",
    lg: "h-14",
    xl: "h-20",
  };
  return <div className={sizeStyles[size]} />;
};

export default Spacer;
