"use client";

import { ThemeProvider } from "next-themes";
import type { ChildrenProps } from "@/types/shared/common.types";

const DarkModeProvider = ({ children }: ChildrenProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
};

export default DarkModeProvider;
