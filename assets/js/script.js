var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".Button-Next",
        prevEl: ".Button-Prev",
    },
});
const loader = document.querySelector('.Logo');

function rotateOnScroll() {
    const scrollPosition = window.scrollY;
    const rotation = scrollPosition * 0;
    loader.style.transform = `rotate(${rotation}deg)`;
}

window.addEventListener('scroll', rotateOnScroll);

AOS.init();