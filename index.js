const sliderNext = document.querySelector(".slider-next");
const sliderPrev = document.querySelector(".slider-prev");
const sliderFigure = document.querySelector(".slider > figure");
const sliderImgs = document.querySelectorAll(".slider img");
const sliderImgsArr = Array.from(sliderImgs);

let imgIndex = 0;
let numOfImgs = 4;

let touchStartX = 0;
let touchEndX = 0;

sliderNext.addEventListener("click", showNext);

sliderPrev.addEventListener("click", showPrev);

sliderImgs.forEach((img) => {
  img.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  });
});

sliderImgs.forEach((img) => {
  img.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 80) {
      showNext();
    } else if (touchStartX - touchEndX < -80) {
      showPrev();
    }
  });
});

function showNext() {
  sliderImgsArr[imgIndex].classList.add("hidden");
  imgIndex += 1;
  imgIndex %= numOfImgs;
  sliderImgsArr[imgIndex].classList.remove("hidden");
  sliderFigure.style.transform = "translateX(" + -100 * imgIndex + "%)";
}

function showPrev() {
  sliderImgsArr[imgIndex].classList.add("hidden");
  imgIndex -= 1;
  imgIndex = (imgIndex + numOfImgs) % numOfImgs;
  sliderImgsArr[imgIndex].classList.remove("hidden");
  sliderFigure.style.transform = "translateX(" + -100 * imgIndex + "%)";
}
