"use client";

import Link from "next/link";
import Error from "@/components/layouts/Error";

const NotFoundPage = () => {
  return (
    <Error errorMessage="잘못된 경로입니다.">
      <Link
        href="/"
        className="rounded-md bg-gray-800 w-32 py-2.5 text-sm font-semibold text-white hover:bg-gray-500"
      >
        Go Back Home
      </Link>
    </Error>
  );
};

export default NotFoundPage;
