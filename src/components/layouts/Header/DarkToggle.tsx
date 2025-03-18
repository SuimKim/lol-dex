"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-x-3">
      <label className="relative inline-block w-11 h-6 cursor-pointer">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={isDark}
          onChange={() => setTheme(isDark ? "light" : "dark")}
        />
        <span className="absolute inset-0 bg-gray-400 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-gray-700 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
        <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-gray-300 rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:peer-checked:bg-gray-400"></span>
      </label>
      <label className="text-sm">{isDark ? "Dark" : "Light"}</label>
    </div>
  );
};

export default DarkToggle;
