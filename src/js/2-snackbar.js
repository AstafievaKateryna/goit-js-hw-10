import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector("form");

form.addEventListener('submit', handlerBtn);
function handlerBtn(event) {
  event.preventDefault();
  const state = Number(event.target.elements.delay.value);

  const delay = Number(event.target.elements.state.value);

    createPromise(state,delay)
      .then(({ delay }) => {
        iziToast.success( {
          title: "success",
          message: `✅ Fulfilled promise in ${delay}ms`,
        });
      })
      .catch(({ delay }) => {
        iziToast.error( {
          title: "error",
          message: `❌ Rejected promise in ${delay}ms`,
        });
     });
}


function createPromise(state,delay) {
  return new Promise((res, rej) => {
    setTimeout(()=>{
    if (state==="fulfilled") {
      res(delay);
    } else {
      rej(delay);
    }
    }, delay)
  });
}

