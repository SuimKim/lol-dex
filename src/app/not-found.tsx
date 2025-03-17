"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Error from "@/components/layouts/Error";

const NotFoundPage = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleBackHome = () => {
    startTransition(() => {
      router.push("/");
    });
  };

  return (
    <Error errorMessage="잘못된 경로입니다.">
      <button
        onClick={handleBackHome}
        className="rounded-md bg-gray-800 w-32 py-2.5 text-sm font-semibold text-white hover:bg-gray-500"
        disabled={isPending}
      >
        {isPending ? "이동 중..." : "Go Back Home"}
      </button>
    </Error>
  );
};

export default NotFoundPage;
