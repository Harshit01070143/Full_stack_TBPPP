// const images = document.querySelectorAll('.slider img');
// const dots = document.querySelectorAll('.dot');

// let currentSlide = 0;

// function changeSlide(index) {
//     dots.forEach((dot) => dot.classList.remove('active'));

//     dots[index].classList.add('active');

//     images.forEach((image) => image.style.display = 'none');

//     images[index].style.display = 'block';

//     currentSlide = index;
// }

// function initSlider() {
//     images[0].style.display = 'block';

//     dots[0].classList.add('active');
// }

// initSlider();

// dots.forEach((dot, index) => dot.addEventListener('click', () => changeSlide(index)));

// setInterval(() => {
//     changeSlide((currentSlide + 1) % images.length);
// }, 3000);
// var imgs = document.querySelectorAll('.slider img');
// var dots = document.querySelectorAll('.dot');
// var currentImg = 0; // index of the first image
// const interval = 3000; // duration(speed) of the slide
// function changeSlide(n) {
//     for (var i = 0; i < imgs.length; i++) { // reset
//         imgs[i].style.opacity = 0;
//         dots[i].className = dots[i].className.replace(' active', '');
//     }
// ​
//     currentImg = (n !== undefined) ? n : (currentImg + 1) % imgs.length;
//     imgs[currentImg].style.opacity = 1;
//     dots[currentImg].className += ' active';
// }
// var timer = setInterval(changeSlide, interval);
// ​
// ​
// function manualChange(n) {
//     clearInterval(timer);
//     changeSlide(n);
//     timer = setInterval(changeSlide, interval);
// }
// changeSlide(currentImg);
var imgs = document.querySelectorAll('.images img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0;
const interval = 3000;

function changeSlider(n) {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        dots[i].className = 'dot';
    }
    imgs[n].style.opacity = 1;
    dots[n].className = 'dot active';
    currentImg = n;
}

changeSlider(0);

var timer = setInterval(function() {
    changeSlider((currentImg + 1) % imgs.length);
}, interval);

for (var i = 0; i < dots.length; i++) {
    dots[i].onclick = function(index) {
        return function() {
            clearInterval(timer);
            changeSlider(index);
            timer = setInterval(function() {
                changeSlider((currentImg + 1) % imgs.length);
            }, interval);
        };
    }(i);
}