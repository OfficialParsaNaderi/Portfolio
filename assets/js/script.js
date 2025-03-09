AOS.init();

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

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const TargetId = this.getAttribute('href');
        const TargetElement = document.querySelector(TargetId);
        TargetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});