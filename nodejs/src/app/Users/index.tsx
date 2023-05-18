import { use, useEffect, Suspense, memo, cache } from "react";
import { Index as Render } from "./date_use";

// import { getData } from "./getData";

// export const revalidate = 60;

// 同じ関数で引数だけ変えてrevalidateを変えた場合、低い方に揃っていた。
const getData = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const url = "https://ryo1999.com/now.php";
  // const url = "https://jsonplaceholder.typicode.com/users";

  const options = {
    next: { revalidate: 60 },
  };

  const res = await fetch(url, options);
  return res.json();
};

const main = () => {
  const { date } = use(getData());

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
