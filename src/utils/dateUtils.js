function dateUtils(inputDate) {
  let currentDateTime = new Date();
  inputDate = new Date(inputDate);
  const yearDiff = currentDateTime.getYear() - inputDate.getYear();
  const monthDiff = currentDateTime.getMonth() - inputDate.getMonth();
  const dayDiff = currentDateTime.getDate() - inputDate.getDate();
  const hourDiff = currentDateTime.getHours() - inputDate.getHours();
  let result = "";
  if (yearDiff < 1) {
    if (monthDiff > 0) {
      if (monthDiff > 1) result = monthDiff + " month(s) ago";
      else {
        if (dayDiff > 30) result = monthDiff + " month(s) ago";
        else result = dayDiff + " day(s) ago";
      }
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
dateUtils("10/31/2023, 8:03:00 AM");
export default dateUtils;
