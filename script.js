const menuIcon = document.getElementById("menu-icon"); 
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

const swiperTravel = new Swiper('.artikel', {
    loop: true,
    spaceBetween: '32',
    grabCursor: true,
    slidesPerWiew: 'auto',
    centeredSlides: 'auto',

    pagination: {
        el:'swiper-pagiation',
    },

});