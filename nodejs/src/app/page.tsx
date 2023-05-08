import React from "react";
import { use, useEffect, Suspense } from "react";

import Indexes from "./users";

const main = () => {
  return (
    <div>
      HELLO
      {/* <Indexes /> */}
      
      <Suspense fallback={<p className="mt-4">ユーザデータ　Loading...</p>}>
        <Indexes />
      </Suspense>
    </div>
  );
};

export default main;
