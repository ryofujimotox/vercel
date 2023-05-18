import { cache } from "react";

//　3 つのうちの最も低い値が使用されます。
const getData = cache(async (revalidate: number = 60) => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const url = "https://ryo1999.com/now.php";
  // const url = "https://jsonplaceholder.typicode.com/users";

  const options = {
    next: { revalidate: revalidate },
  };

  const res = await fetch(url, options);
  return res.json();
});

export { getData };
