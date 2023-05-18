import { use, useEffect, Suspense, memo, useState, cache } from "react";
import { getData } from "./getData";

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
