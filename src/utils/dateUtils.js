function dateUtils(inputDate) {
  const currentDateTime = new Date();
  inputDate = new Date(inputDate);
  const yearDiff = currentDateTime.getYear() - inputDate.getYear();
  const monthDiff = currentDateTime.getMonth() - inputDate.getMonth();
  const dayDiff = currentDateTime.getDate() - inputDate.getDate();
  const hourDiff = currentDateTime.getHours() - inputDate.getHours();
  let result = "";
  if (yearDiff < 1) {
    if (monthDiff > 0) {
      result = monthDiff + " month(s) ago";
    } else {
      if (dayDiff > 0) {
        result = dayDiff + " day(s) ago";
      } else {
        result = hourDiff + " hour(s) ago";
      }
    }
  } else {
    if (monthDiff > 0)
      result = yearDiff + " year(s) " + monthDiff + " month(s) ago.";
    else {
      result = yearDiff + " year(s) ago";
    }
  }
  console.log(result);
  return result;
}
dateUtils("11/1/2023, 8:03:00 AM");
export default dateUtils;
