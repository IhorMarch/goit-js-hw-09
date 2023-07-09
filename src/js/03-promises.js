
import Notiflix from 'notiflix';

  const formEl =document.querySelector('.form')
  let delayEl =document.querySelector('input[name="delay"]')
  let stepEl = document.querySelector('input[name="step"]')
  let amountEl = document.querySelector('input[name="amount"]')
  
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill 
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay)
  });
}


function handlerCreate(evt) {
  evt.preventDefault();
  if (!evt.target.tagName === 'BUTTON') return;

  const {
    elements: { delay,step,amount }
  } = evt.currentTarget;

  delayEl = Number(delay.value);
  stepEl = Number(step.value);
  amountEl = Number(amount.value);
  
for (let i = 1; i <=  amountEl; i += 1) {
createPromise(i, delayEl)
.then(({ position, delay }) => {
 Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({ position, delay }) => {
Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
});
  delayEl+= stepEl;
  } 
   evt.currentTarget.reset();
}

formEl.addEventListener("submit", handlerCreate)

 

 