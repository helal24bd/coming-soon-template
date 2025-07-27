
const countdown = () => {
  const countDate = new Date("Dec 31, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  document.getElementById("days").innerText = Math.floor(gap / day);
  document.getElementById("hours").innerText = Math.floor((gap % day) / hour);
  document.getElementById("minutes").innerText = Math.floor((gap % hour) / minute);
  document.getElementById("seconds").innerText = Math.floor((gap % minute) / second);
};

setInterval(countdown, 1000);
