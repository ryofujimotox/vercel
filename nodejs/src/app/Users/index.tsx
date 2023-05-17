import { use, useEffect, Suspense, memo, cache } from "react";
import { useRouter } from "next/navigation";

// import { Index as Render } from "./render";
import { Index as Render } from "./date_use";

function Index() {
  // return (
  //   <Render />
  // );
  return (
    <Suspense fallback={<div>SSR中</div>}>
      <Render />
    </Suspense>
  );
}

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
    next: { revalidate: 60 },
  };

  const res = await fetch(url, options);
  // console.log(res);
  const data = await res.json();

  return data;
};

export { Index, getData };
