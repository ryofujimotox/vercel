import React from "react";
import { use, useEffect, Suspense } from "react";

const Indexes = () => {
  const {date} = use(getData());
  console.log("item");
  console.log(date);

  return <div>{date}</div>;
};

export default Indexes;

/**
 *
 * SSRの値
 *
 * @returns
 */
export async function getData() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const url = "https://ryo1999.com/now.php";
  // const url = "https://jsonplaceholder.typicode.com/users";

  const options = { next: { revalidate: 10 } };

  const res = await fetch(url, options);
  // console.log(res);
  const data = await res.json()


  return data;
}
