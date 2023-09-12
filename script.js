const date = new Date();
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayOfTheWeek = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
currentDayOfTheWeek.textContent = weekDays[date.getDay()];
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
currentUTCTime.textContent = date.getTime();
