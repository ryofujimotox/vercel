const getData2 = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const url = "https://ryo1999.com/now2.php";
  // const url = "https://jsonplaceholder.typicode.com/users";

  const options = {
    next: { revalidate: 60 },
  };

  const res = await fetch(url, options);
  return res.json();
};

export { getData2 };
