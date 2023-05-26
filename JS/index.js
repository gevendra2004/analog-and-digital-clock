// =============== CLOCK =============
const hourHand = document.getElementById('clock-hours');
const minuteHand = document.getElementById('clock-mins');

function rotateClockHands() {
  // Getting the current time
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Calculating the rotation degrees for each hand
  const hourRotation = (hours % 12) * 30 + (minutes / 60) * 30;
  const minuteRotation = (minutes / 60) * 360 + (seconds / 60) * 6;

  // Applying the rotation to the clock hands using CSS transforms
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
}

// Call the rotateClockHands function every second
setInterval(rotateClockHands, 1000);


// ================= Time and Date===============


const dateDay = document.getElementById('date-day');
const dateMonth = document.getElementById('date-month');
const date = document.getElementById('date');
const dateYear = document.getElementById('date-year');
const dateHour = document.getElementById('text-hour');
const dateMinutes = document.getElementById('text-min');
const dateAmPm = document.getElementById('ampm');

const clockText = () => {
  // Getting the current time
  const currentDate = new Date();
  const day = currentDate.getDay();
  const month = currentDate.getMonth();
  const todayDate = currentDate.getDate();
  const year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  // for the days of the week and months
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  dateDay.innerHTML = `${days[day]}`;
  dateMonth.innerHTML = `${months[month]}`;
  date.innerHTML = `${todayDate}, `;
  dateYear.innerHTML = year;

  // Check whether AM or PM
  var ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, set it to 12

  dateAmPm.innerHTML = ampm;
  dateHour.innerHTML = `${hours}:`;

  if (minutes < 10) {
    dateMinutes.innerHTML = `0${minutes}`;
  } else {
    dateMinutes.innerHTML = minutes;
  }
};

setInterval(clockText, 1000);
