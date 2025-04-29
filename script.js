const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const ampm = document.getElementById("ampm");
// this code for updating clock every single second

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampmValue = hours <= 12 ? "AM" : "PM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hour.textContent = hours;
  minute.textContent = minutes;
  second.textContent = seconds;
  ampm.textContent = ampmValue;
}
setInterval(updateClock, 1000);
