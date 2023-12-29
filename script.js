const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");

function countdown() {
  const targetDate = new Date("1 Jan 2024");
  const currentDate = new Date();

  const differenceTimeInSeconds = (targetDate - currentDate) / 1000;
  const days = Math.floor(differenceTimeInSeconds / (60 * 60 * 24));
  const hours = Math.floor((differenceTimeInSeconds / (60 * 60)) % 24);
  const minutes = Math.floor((differenceTimeInSeconds / 60) % 60);
  const seconds = Math.floor(differenceTimeInSeconds % 60);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEL.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
