let advice_id = document.querySelector(".advice_number");
let advice_content = document.querySelector(".advice");
const advice_generator = document.querySelector(".advice_generator");
const api_link = "https://api.adviceslip.com/advice";

function randomAdvice() {
  fetch(api_link)
    .then((res) => res.json())
    .then((result) => {
      advice_id.innerText = result.slip.id;
      advice_content.innerText = result.slip.advice;
    });
}

advice_generator.addEventListener("click", randomAdvice);

randomAdvice();
