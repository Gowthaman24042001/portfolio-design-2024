let menuList = document.querySelector(".menu");
let openMenu = document.querySelector(".fa-bars");
let closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", ()=> {
    menuList.style.transform = `translateX(0px)`;
    closeMenu.style.display = `block`;
    openMenu.style.display = `none`;
})
closeMenu.addEventListener("click", ()=>{
    menuList.style.transform = `translateX(-600px)`;
    closeMenu.style.display = `none`;
    openMenu.style.display = `block`;
})


// // My prjects Js section 
// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');

// let currentSlide = 0;
// const totalSlides = slides.length;
// const slidesPerView = 3;

// prevButton.addEventListener('click', () => {
//   currentSlide--;
//   if (currentSlide < 0) {
//     currentSlide = totalSlides - slidesPerView;
//   }
//   updateSlider();
// });

// nextButton.addEventListener('click', () => {
//   currentSlide++;
//   if (currentSlide >= totalSlides - slidesPerView + 1) {
//     currentSlide = 0;
//   }
//   updateSlider();
// });

// function updateSlider() {
//   const slideWidth = slides[0].offsetWidth;
//   const translateX = currentSlide * slideWidth;
//   slider.style.transform = `translateX(-${translateX}px)`;
// }

// updateSlider();


// New slider code with mobile resonsive

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;
let slidesPerView = getSlidesPerView();
const totalSlides = slides.length;

// Function to determine how many slides to show based on screen width
function getSlidesPerView() {
  if (window.innerWidth <= 480) {
    return 1; // 1 slide visible for mobile
  } else if (window.innerWidth <= 768) {
    return 2; // 2 slides visible for tablets
  } else {
    return 3; // 3 slides visible for desktop
  }
}

// Event listeners for buttons
prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - slidesPerView;
  }
  updateSlider();
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= totalSlides - slidesPerView + 1) {
    currentSlide = 0;
  }
  updateSlider();
});

// Function to update the slider position
function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  const translateX = currentSlide * slideWidth;
  slider.style.transform = `translateX(-${translateX}px)`;
}

// Update slidesPerView on window resize
window.addEventListener('resize', () => {
  const newSlidesPerView = getSlidesPerView();
  if (newSlidesPerView !== slidesPerView) {
    slidesPerView = newSlidesPerView;
    currentSlide = 0; // Reset to the first slide
    updateSlider();
  }
});

// Initial call to set the slider position
updateSlider();