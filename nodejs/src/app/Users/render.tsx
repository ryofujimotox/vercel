import { use, useEffect, Suspense, memo } from "react";
import { useRouter } from "next/navigation";

import { Index as CSRIndex } from "./client_data";

function RenderIndex() {
  const { date } = use(getData());
  return <CSRIndex date={date} />;
}
export const Index = memo(RenderIndex);

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

  const options = {
    next: { revalidate: 10 },
  };

  const res = await fetch(url, options);
  // console.log(res);
  const data = await res.json();

  return data;
}
