import { use, useEffect, Suspense, memo, cache } from "react";
import { useRouter } from "next/navigation";

import { Index as CSRIndex } from "./client_data";

function RenderIndex() {
  const { date } = use(getData());
  return (
    <Suspense fallback={<div>CSR中</div>}>
      <CSRIndex date={date} />
    </Suspense>
  );
}
export const Index = RenderIndex;

/**
 *
 * SSRの値
 *
 * @returns
 */
const getData = async () => {
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
};

const cacheGetData = cache(getData);

export { getData, cacheGetData };
