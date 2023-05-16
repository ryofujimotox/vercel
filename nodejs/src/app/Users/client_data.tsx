"use client";

import { use, useEffect, Suspense, memo, useState, cache } from "react";
import { useRouter } from "next/navigation";
import { cacheGetData, getData } from "./render";

const ViewClientData = ({ date }: { date: string }) => {
  const router = useRouter();

  const { date: newDate } = use(getData());
  const [data, setData] = useState(date);

  useEffect(() => {
    updateDate();
  }, []);

  const updateDate = async () => {
    setTimeout(() => {
      // setData("newDate");
    }, 3000);
  };

  const update = async () => {
    router.refresh();
  };

  return (
    <Suspense fallback={<p className="mt-4">ユーザデータ　Loading...</p>}>
      <div>{data}</div>

      <button onClick={update}>update</button>

      <div>{newDate}</div>
    </Suspense>
  );
};

export default ViewClientData;
export const Index = ViewClientData;
