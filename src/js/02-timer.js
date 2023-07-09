
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

// const startBtn = document.querySelector("button[data-start]");
// startBtn.disabled = true;


const selectors = {
  startBtn: document.querySelector('[data-start]'),
  timerdDays: document.querySelector('[data-days]'),
  timerHours: document.querySelector('[data-hours]'),
  timerMinutes: document.querySelector('[data-minutes]'),
  timerSeconds: document.querySelector('[data-seconds]'),
};
selectors.startBtn.disabled = true;



  const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
      onClose(selectedDates) {

        const checkDate = selectedDates[0] - options.defaultDate;
  
        if (checkDate < 0) {
           const message="Please choose a date in the future"
              return  Notiflix.Notify.failure(message);
          }
          selectors.startBtn.disabled = false;
         
        
  },
};

const fp = flatpickr('#datetime-picker', options);

function onStart() {
 timerId =  setInterval(() => {
    const selectedDate = fp.selectedDates[0]
    const currentDate = new Date()
    const counter = selectedDate - currentDate
   selectors.startBtn.disabled = true;
   if (counter < 0) {
     clearInterval(timerId)
     return
  }
    updateTimerFace(convertMs(counter));
 }, 1000)

}


function addZero(value) {
return String(value).padStart(2, 0);
}



function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function updateTimerFace({ days, hours, minutes, seconds }) {
selectors.timerdDays.textContent = addZero(days);
selectors.timerHours.textContent = addZero(hours);
selectors.timerMinutes.textContent = addZero(minutes);
selectors.timerSeconds.textContent = addZero(seconds);
}



selectors.startBtn.addEventListener("click", onStart)
