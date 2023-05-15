"use client";

import { use, useEffect, Suspense, memo } from "react";
import { useRouter } from "next/navigation";
import { getData } from "./render";

export const Index = memo(({ date }: { date: string }) => {
  const router = useRouter();

  const update = () => {
    // getData();
    router.refresh();
  };

  return (
    <>
      <div>{date}</div>

      <button onClick={update}>update</button>
    </>
  );
});
