"use client";

import Link from "next/link";
import { useEffect } from "react";
import Error from "@/components/layouts/Error";

const ErrorPage = ({
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
    <Error errorMessage="오류가 발생했습니다. 다시 시도하시겠어요?">
      <button
        onClick={() => reset()}
        className="rounded-md bg-gray-800 w-32 py-2.5 text-sm font-semibold text-white hover:bg-gray-500"
      >
        Try Again
      </button>
      <Link
        href="/"
        className="w-32 py-2.5 text-sm font-semibold hover:text-gray-500"
      >
        Go Back Home <span aria-hidden="true">&rarr;</span>
      </Link>
    </Error>
  );
};

export default ErrorPage;
