import React from "react";
import { Index } from "./Users/index";
import getNowDate from "./getNowDate";

const main = () => {
  return (
    <>
      <div>Build: {getNowDate()}</div>
      <div>--------v4</div>
      <Index />
    </>
  );
};

export const revalidate = 99999;

export default main;
