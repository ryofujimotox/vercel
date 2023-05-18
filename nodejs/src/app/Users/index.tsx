import { use, useEffect, Suspense, memo, cache } from "react";
import { Index as DateUse } from "./date_use";
import DateCc from "./date_cc";

import { getData } from "./getData";

const main = () => {
  const { date } = use(getData(60));

  return (
    <div>
      <div>SSR: {date}</div>

      <Suspense fallback={<div>SSR中</div>}>
        <DateUse>
          <DateCc />
        </DateUse>
      </Suspense>
    </div>
  );
};

const Index = main;
export { Index };
