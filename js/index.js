const contentSliderOne = document.querySelector(".ftx-main-slider__content");
const contentSliderTwo = document.querySelector(".ftx-main-slider__content_two");
const contentSliderThree = document.querySelector(".ftx-main-slider__content_three");
const contentSliderFour = document.querySelector(".ftx-main-slider__content_four");

const btnSliderOne = document.querySelector(".ftx-main-slider__btns_one");
const btnSliderTwo = document.querySelector(".ftx-main-slider__btns_two");
const btnSliderThree = document.querySelector(".ftx-main-slider__btns_three");
const btnSliderFour = document.querySelector(".ftx-main-slider__btns_four");

btnSliderOne.addEventListener("click", () => {
  contentSliderOne.style.display = "flex";
  contentSliderThree.style.display = "none";
  contentSliderFour.style.display = "none";
  contentSliderTwo.style.display = "none";

  btnSliderTwo.classList.contains("active-slider")
    ? btnSliderTwo.classList.remove("active-slider")
    : "";

  btnSliderThree.classList.contains("active-slider")
    ? btnSliderThree.classList.remove("active-slider")
    : "";

  btnSliderFour.classList.contains("active-slider")
    ? btnSliderFour.classList.remove("active-slider")
    : "";

  btnSliderOne.classList.add("active-slider");
});

btnSliderTwo.addEventListener("click", () => {
  contentSliderOne.style.display = "none";
  contentSliderThree.style.display = "none";
  contentSliderFour.style.display = "none";
  contentSliderTwo.style.display = "flex";

  btnSliderOne.classList.contains("active-slider")
    ? btnSliderOne.classList.remove("active-slider")
    : "";

  btnSliderThree.classList.contains("active-slider")
    ? btnSliderThree.classList.remove("active-slider")
    : "";

  btnSliderFour.classList.contains("active-slider")
    ? btnSliderFour.classList.remove("active-slider")
    : "";

  btnSliderTwo.classList.add("active-slider");
});

btnSliderThree.addEventListener("click", () => {
  contentSliderOne.style.display = "none";
  contentSliderTwo.style.display = "none";
  contentSliderThree.style.display = "flex";
  contentSliderFour.style.display = "none";

  btnSliderTwo.classList.contains("active-slider")
    ? btnSliderTwo.classList.remove("active-slider")
    : "";

  btnSliderOne.classList.contains("active-slider")
    ? btnSliderOne.classList.remove("active-slider")
    : "";

  btnSliderFour.classList.contains("active-slider")
    ? btnSliderFour.classList.remove("active-slider")
    : "";

  btnSliderThree.classList.add("active-slider");
});

btnSliderFour.addEventListener("click", () => {
  contentSliderOne.style.display = "none";
  contentSliderTwo.style.display = "none";
  contentSliderThree.style.display = "none";
  contentSliderFour.style.display = "flex";

  btnSliderTwo.classList.contains("active-slider")
    ? btnSliderTwo.classList.remove("active-slider")
    : "";

  btnSliderOne.classList.contains("active-slider")
    ? btnSliderOne.classList.remove("active-slider")
    : "";

  btnSliderThree.classList.contains("active-slider")
    ? btnSliderThree.classList.remove("active-slider")
    : "";

  btnSliderFour.classList.add("active-slider");
});
