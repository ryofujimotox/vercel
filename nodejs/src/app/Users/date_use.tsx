import { use, useEffect, Suspense, memo, useState, cache } from "react";
import { getData2 as getData } from "./getData2";

import CcButtons from "./date_cc";

const ViewClientData = () => {
  const { date: newDate } = use(getData());

  return (
    <>
      <div>USE: {newDate}</div>
      <CcButtons />
    </>
  );
};

const Index = ViewClientData;
export default Index;
export { Index };
