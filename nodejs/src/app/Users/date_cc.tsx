"use client";

import { use, useEffect, Suspense, memo, useState, cache } from "react";
import { useRouter } from "next/navigation";

import { getData2 as getData } from "./getData2";

const ViewClientData = () => {
  const router = useRouter();
  const update = async () => {
    router.refresh();
  };

  const [newDate, setNewDate] = useState();
  useEffect(() => {
    set();
  }, []);
  const set = async () => {
    const { date: _date } = await getData();
    setNewDate(_date);
  };

  return (
    <>
      <div>CC: {newDate}</div>
      <button onClick={update}>update</button>
    </>
  );
};

const Index = ViewClientData;
export default Index;
