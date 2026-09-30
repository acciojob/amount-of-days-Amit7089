//your JS code here. If required.
function daysOfAYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ? 366 : 365;
}
