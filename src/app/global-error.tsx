"use client";

import { useTransition } from "react";
import Error from "@/components/layouts/Error";

const GlobalErrorPage = ({ reset }: { reset: () => void }) => {
  const [isPending, startTransition] = useTransition();

  const handleReset = () => {
    startTransition(() => {
      reset();
    });
  };

  return (
    <Error errorMessage="큰일이에요! 예기치 않은 오류가 발생했습니다.">
      <button
        onClick={handleReset}
        className="rounded-md bg-gray-800 w-32 py-2.5 text-sm font-semibold text-white hover:bg-gray-500"
        disabled={isPending}
      >
        {isPending ? "Try Again 중..." : "Try Again"}
      </button>
    </Error>
  );
};

export default GlobalErrorPage;
