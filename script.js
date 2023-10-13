let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('.nav-container');

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-80px";
    }

    prevScrollPos = currentScrollPos;
};

const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let currentIndex = 0;
let interval;

function startSlide() {
    interval = setInterval(nextSlide, 2000);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function updateSlider() {
    const translateX = -currentIndex * 102;
    slider.style.transform = `translateX(${translateX}%)`;
}

startSlide();

slider.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

slider.addEventListener('mouseleave', startSlide);
