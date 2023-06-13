"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((openbutton) => {
  openbutton.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const section1btn = document.querySelector(".btn--scroll-to");

const section1 = document.querySelector("#section--1");

section1btn.addEventListener("click", function (e) {
  e.preventDefault();

  section1.scrollIntoView({ behavior: "smooth" });
});

// Đổi màu nav
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });




document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

document
  .querySelector(".operations__tab-container")
  .addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");

    if (clicked === null) {
      return;
    }

    document.querySelectorAll(".operations__tab").forEach((f) => {
      f.classList.remove("operations__tab--active");
    });

    clicked.classList.add("operations__tab--active");

    document.querySelectorAll(".operations__content").forEach((c) => {
      c.classList.remove("operations__content--active");
    });

    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add("operations__content--active");
  });

function fade(e, opac) {
  if (e.target.classList.contains("nav__link")) {
    const siblings = e.target.closest(".nav").querySelectorAll(".nav__link");

    siblings.forEach((navlink) => {
      if (navlink !== e.target) {
        navlink.style.opacity = opac;
      }
    });

    document.querySelector("img").style.opacity = opac;
  }
}

document
  .querySelector(".nav")
  .addEventListener("mouseover", (e) => fade(e, 0.5));

document.querySelector(".nav").addEventListener("mouseout", (e) => fade(e, 1));

const header = document.querySelector(".header");

let nav_height = document.querySelector(".nav").getBoundingClientRect().height;
console.log(nav_height);

function obscallback(enteries) {
  if (!enteries[0].isIntersecting) {
    document.querySelector(".nav").classList.add("sticky");
  } else {
    document.querySelector(".nav").classList.remove("sticky");
  }
}

let obsoptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${nav_height}px`,
};

const headerObserver = new IntersectionObserver(obscallback, obsoptions);

headerObserver.observe(header);

const allsections = document.querySelectorAll(".section");

function secCallback(enteries) {
  if (!enteries[0].isIntersecting) {
    return;
  }

  enteries[0].target.classList.remove("section--hidden");

  sectionobserver.unobserve(enteries[0].target);
}

let secOptions = {
  root: null,
  threshold: 0.15,
};

const sectionobserver = new IntersectionObserver(secCallback, secOptions);

allsections.forEach((el) => {
  sectionobserver.observe(el);
  el.classList.add("section--hidden");
});

const lazyimages = document.querySelectorAll("img[data-src");

function imgCallback(enteries) {
  if (!enteries[0].isIntersecting) return;

  enteries[0].target.src = enteries[0].target.dataset.src;

  enteries[0].target.addEventListener("load", function () {
    enteries[0].target.classList.remove("lazy-img");
  });
}

let imgOptions = {
  root: null,
  threshold: 0,
  rootMargin: "90px",
};

const imageObserver = new IntersectionObserver(imgCallback, imgOptions);

lazyimages.forEach((el) => imageObserver.observe(el));

const silder = document.querySelector(".slider");

const slides = document.querySelectorAll(".slide");

function transFunc(cs) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${100 * i - cs * 100}%)`;
  }
}

transFunc(0);

let currentSlide = 0;

function nextSlide() {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  transFunc(currentSlide);
}

function previousSlide() {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }

  transFunc(currentSlide);
}

document
  .querySelector(".slider__btn--right")
  .addEventListener("click", nextSlide);

document
  .querySelector(".slider__btn--left")
  .addEventListener("click", previousSlide);

document.addEventListener("keydown", (e) => {
  e.key === "ArrowLeft" && previousSlide();
  e.key === "ArrowRight" && nextSlide();
});
