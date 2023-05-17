import React from "react";
import { use, useEffect, Suspense } from "react";

import { Index } from "./Users/index";

export const revalidate = 10;

const main = () => {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return (
    <div>
      <div>SSR: {formattedDate}</div>
      <Index />
    </div>
  );
};

export default main;