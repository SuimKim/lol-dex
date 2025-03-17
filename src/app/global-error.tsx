"use client";

import { useEffect } from "react";
import Error from "@/components/layouts/Error";

const GlobalErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.log("error", error);
  }, [error]);

  return (
    <Error errorMessage="큰일이에요! 예기치 않은 오류가 발생했습니다.">
      <button
        onClick={() => reset()}
        className="rounded-md bg-gray-800 w-32 py-2.5 text-sm font-semibold text-white hover:bg-gray-500"
      >
        Try Again
      </button>
    </Error>
  );
};

export default GlobalErrorPage;
