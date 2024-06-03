import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector("form");

form.addEventListener('submit', handlerBtn);
function handlerBtn(evt) {
  evt.preventDefault();
  const firstDelay = Number(evt.target.elements.delay.value);

  const delayStep = Number(evt.target.elements.state.value);

    createPromise(firstDelay,delayStep)
      .then(({ delayStep }) => {
        iziToast.success( {
          title: "success",
          message: `✅ Fulfilled promise in ${delayStep}ms`,
        });
      })
      .catch(({ delayStep }) => {
        iziToast.error( {
          title: "error",
          message: `❌ Rejected promise in ${delayStep}ms`,
        });
     });
}


function createPromise(firstDelay,delayStep) {
  return new Promise((res, rej) => {
    setTimeout(()=>{
    if (state==="fulfilled") {
      res(delayStep);
    } else {
      rej(delayStep);
    }
    }, delayStep)
  });
}

