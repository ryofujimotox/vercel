import React from "react";
import { use, useEffect, Suspense } from "react";

import { Index } from "./Users/render";

const main = () => {
  return (
    <div>
      HELLO
      <Suspense fallback={<p className="mt-4">ユーザデータ　Loading...</p>}>
        <Index />
      </Suspense>
    </div>
  );
};

export default main;
