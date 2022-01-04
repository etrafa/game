"using strict";

const playButtonEl = document.querySelector(".hexagon-shape");
const menuContainerEl = document.querySelector(".menu-container");

const spinnerButtonEl = document.querySelector(".spinner-button");
const spinnerWheelEl = document.querySelector(".spinner-wheel");

// spinnerButtonEl.addEventListener("click", () => {
//   spinnerWheelEl.classList.toggle("spinner-wheel-active");
// });

const spinWheelDegrees = [
  { degree: 25, questionType: "science" },
  { degree: 75, questionType: "movie" },
  { degree: 125, questionType: "geography" },
  { degree: 175, questionType: "history" },
  { degree: 225, questionType: "art" },
  { degree: 280, questionType: "sports" },
  { degree: 340, questionType: "randomly" },
];

spinnerButtonEl.addEventListener("click", () => {
  let counter = 1;
  let randomNumber = Math.trunc(Math.random() * 7);
  console.log(randomNumber);
  if (counter % 2 !== 0) {
    spinnerWheelEl.classList.toggle("spinner-wheel-active");
    counter++;
    console.log(counter);
    setTimeout(() => {
      spinnerWheelEl.classList.toggle("spinner-wheel-active-fast");
    }, 3000);
  } else {
    spinnerWheelEl.style.transform = `rotate(${spinWheelDegrees[randomNumber].degree}deg)`;
  }
});
