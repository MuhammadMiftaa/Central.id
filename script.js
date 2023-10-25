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

const hero = document.getElementById('heroNav');
const bestseller = document.getElementById('bestsellerNav');
const product = document.getElementById('productNav');
const contact = document.getElementById('contactNav');
const about = document.getElementById('aboutNav');
hero.addEventListener('click', function(){
    hero.classList.add('active')
    bestseller.classList.remove('active')
    product.classList.remove('active')
    contact.classList.remove('active')
    about.classList.remove('active')
})
bestseller.addEventListener('click', function(){
    bestseller.classList.add('active')
    hero.classList.remove('active')
    product.classList.remove('active')
    contact.classList.remove('active')
    about.classList.remove('active')
})
product.addEventListener('click', function(){
    product.classList.add('active')
    bestseller.classList.remove('active')
    hero.classList.remove('active')
    contact.classList.remove('active')
    about.classList.remove('active')
})
contact.addEventListener('click', function(){
    contact.classList.add('active')
    bestseller.classList.remove('active')
    product.classList.remove('active')
    hero.classList.remove('active')
    about.classList.remove('active')
})
about.addEventListener('click', function(){
    about.classList.add('active')
    bestseller.classList.remove('active')
    product.classList.remove('active')
    contact.classList.remove('active')
    hero.classList.remove('active')
})

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
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

startSlide();

slider.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

slider.addEventListener('mouseleave', startSlide);

const modalBoxes = document.querySelectorAll('.modal');
const modalContainer = document.querySelector('.modal-container');
document.addEventListener('click', function (e) {
    modalBoxes.forEach(function (modalBox, index) {
        if (e.target.classList.contains('product-detail') && (e.target.parentElement.classList.contains(index + 1) || e.target.parentElement.parentElement.classList.contains(index + 1))) {
            modalBox.classList.add('active');
            e.preventDefault();
        }
    });
    if (e.target.classList.contains('modal') || e.target.classList.contains('x')) {
        modalBoxes.forEach(function (modalBox) {
            modalBox.classList.remove('active')
            e.preventDefault();
        });
    }
})
