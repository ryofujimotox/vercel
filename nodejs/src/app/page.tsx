import React from "react";
import { Index } from "./Users/index";

export const revalidate = 0;

const format = new Intl.DateTimeFormat("ja-JP", {
  timeZone: "Asia/Tokyo",
  timeStyle: "full",
});

const main = () => {
  const now = new Date();

  return (
    <>
      <div>Build: {format.format(now)}</div>
      <div>--------v4</div>
      <Index />
    </>
  );
};

export default main;
