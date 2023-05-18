import { use, useEffect, Suspense, memo, cache } from "react";
import { Index as Render } from "./date_use";

import { getData } from "./getData";

// export const revalidate = 60;

const main = () => {
  const { date } = use(getData(0));

  return (
    <div>
      <div>SSR: {date}</div>

      <Suspense fallback={<div>SSR中</div>}>
        <Render />
      </Suspense>
    </div>
  );
};

const Index = main;
export { Index };
