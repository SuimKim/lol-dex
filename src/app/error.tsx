"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Error from "@/components/layouts/Error";

const ErrorPage = ({ reset }: { reset: () => void }) => {
  const [isHomePending, startHomeTransition] = useTransition();
  const [isResetPending, startResetTransition] = useTransition();
  const router = useRouter();

  const handleBackHome = () => {
    startHomeTransition(() => {
      router.push("/");
    });
  };

  const handleReset = () => {
    startResetTransition(() => {
      reset();
    });
  };

  return (
    <Error errorMessage="오류가 발생했습니다. 다시 시도하시겠어요?">
      <button
        onClick={handleReset}
        className="rounded-md bg-gray-800 w-32 py-2.5 text-sm font-semibold text-white hover:bg-gray-500"
        disabled={isResetPending}
      >
        {isResetPending ? "Try Again 중..." : "Try Again"}
      </button>
      <button
        onClick={handleBackHome}
        disabled={isHomePending}
        className="w-32 py-2.5 text-sm font-semibold hover:text-gray-500"
      >
        {isHomePending ? "이동 중..." : "Go Back Home"}
      </button>
    </Error>
  );
};

export default ErrorPage;
