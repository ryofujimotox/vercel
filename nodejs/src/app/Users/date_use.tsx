import { use, useEffect, Suspense, memo, useState, cache } from "react";
import { getData } from "./getData";

const ViewClientData = ({ children }: { children: any }) => {
  const { date: newDate } = use(getData(10));

  return (
    <>
      <div>USE: {newDate}</div>
      {children}
    </>
  );
};

const Index = ViewClientData;
export default Index;
export { Index };
