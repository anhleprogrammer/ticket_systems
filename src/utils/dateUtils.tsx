function dateUtils(inputDate: any) {
  let currentDateTime = new Date();
  inputDate = new Date(inputDate);
  let milliSecondsDiff = currentDateTime.getTime() - inputDate.getTime();
  let minuteDiff = Math.floor(milliSecondsDiff / 1000 / 60);
  let hourDiff = Math.floor(minuteDiff / 60);
  let dayDiff = Math.floor(hourDiff / 24);
  let monthDiff = currentDateTime.getMonth() - inputDate.getMonth();
  let yearDiff = currentDateTime.getFullYear() - inputDate.getFullYear();
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
  return result;
}
dateUtils("10/31/2023, 8:03:00 AM");
export default dateUtils;
