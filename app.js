// Global Informations
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

let slidesCount = sliderImages.length;

let currentIndex = 1;

let slideNumber = document.querySelector("#slide-number");

let prevBtn = document.querySelector("#prev");

let nextBtn = document.querySelector("#next");

let indecators = document.querySelector("#indicators");

// Handle click on buttons

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

// Creat indecators
let indecatorsUl = document.createElement("ul");

for (let i = 0; i < slidesCount; i++) {
  let indecatorsLi = document.createElement("li");

  indecatorsLi.setAttribute("data-index", i + 1);

  indecatorsLi.textContent = `${i + 1}`;

  indecatorsUl.appendChild(indecatorsLi);
}

indecators.appendChild(indecatorsUl);

let arrLi = Array.from(indecatorsUl.children);

for (let i = 0; i < arrLi.length; i++) {
  arrLi[i].onclick = function () {
    currentIndex = arrLi[i].textContent;

    theChecker();
  };
}

// Handle click on keyboard arrows
document.addEventListener("keydown", (event) => {
  if (event.keyCode == 39) {
    nextSlide();
  } else if (event.keyCode == 37) {
    prevSlide();
  }
});

// Execute thChecher function
theChecker();

// Functions

function nextSlide() {
  if (currentIndex != slidesCount) {
    currentIndex++;
  }

  theChecker();
}

function prevSlide() {
  if (currentIndex != 1) {
    currentIndex--;
  }

  theChecker();
}

function theChecker() {
  slideNumber.textContent = `${currentIndex} / ${slidesCount}`;

  removeClasses();

  sliderImages[currentIndex - 1].classList.add("active");

  indecatorsUl.children[currentIndex - 1].classList.add("active");

  // Add disabled class to buttons
  if (currentIndex == slidesCount) {
    nextBtn.classList.add("disabled");
  }
  if (currentIndex == 1) {
    prevBtn.classList.add("disabled");
  }
}

function removeClasses() {
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });

  arrLi.forEach((li) => {
    li.classList.remove("active");
  });

  nextBtn.classList.remove("disabled");
  prevBtn.classList.remove("disabled");
}
