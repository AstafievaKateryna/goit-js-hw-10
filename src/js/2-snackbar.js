import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector("form");

form.addEventListener('submit', handlerBtn);
function handlerBtn(event) {
  event.preventDefault();
  const delay = parseInt(event.target.delay.value);

  const state = event.target.state.value;

  function createPromise(delay, state) {
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

    createPromise(delay, state)
      .then(delay => {
        console.log(`✅ Fulfilled promise in ${delay}ms`);
        iziToast.success( {
          title: "success",
          message: `✅ Fulfilled promise in ${delay}ms`,
        });
      })
      .catch(delay => {
        console.log(`❌ Rejected promise in ${delay}ms`);
        iziToast.error( {
          title: "error",
          message: `❌ Rejected promise in ${delay}ms`,
        });
     });
}



