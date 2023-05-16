"use client";

import { use, useEffect, Suspense, memo, useState, cache } from "react";
import { useRouter } from "next/navigation";
import { cacheGetData, getData } from "./render";

const ViewClientData = () => {
  const router = useRouter();

  // todo 2秒後に勝手に更新して、SSRと違うと怒られる？？
  const { date: newDate } = use(getData());

  const update = async () => {
    router.refresh();
  };

  return (
    <Suspense fallback={<p className="mt-4">ロード中</p>}>
      <button onClick={update}>update</button>

      <div>{newDate}</div>
    </Suspense>
  );
};

export default ViewClientData;
export const Index = ViewClientData;
