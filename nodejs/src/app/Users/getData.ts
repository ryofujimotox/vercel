const getData = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const url = "https://ryo1999.com/now.php";
  // const url = "https://jsonplaceholder.typicode.com/users";

  const options = {
    next: { revalidate: 0 },
  };

  const res = await fetch(url, options);
  // console.log(res);
  const data = await res.json();

  return data;
};

const getData2 = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const url = "https://ryo1999.com/now.php";
  // const url = "https://jsonplaceholder.typicode.com/users";

  const options = {
    next: { revalidate: 0 },
  };

  const res = await fetch(url, options);
  // console.log(res);
  const data = await res.json();

  return data;
};

export { getData, getData2 };
