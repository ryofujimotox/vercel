// 同じ関数で引数だけ変えてrevalidateを変えた場合、低い方に揃っていた。
const getData = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const url = "https://ryo1999.com/now.php";
  // const url = "https://jsonplaceholder.typicode.com/users";

  const options = {
    next: { revalidate: 10 },
  };

  const res = await fetch(url, options);
  return res.json();
};

export { getData };
