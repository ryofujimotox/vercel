const format = new Intl.DateTimeFormat("ja-JP", {
  timeZone: "Asia/Tokyo",
  timeStyle: "full",
});

const getNowDate = () => {
  const now = new Date();
  return format.format(now);
};

export default getNowDate;
