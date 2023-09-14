document.addEventListener("DOMContentLoaded", function () {
const mainHeading = document.getElementById("mainHeading");
const mainNavbar = document.getElementById("mainNavbar");

function adjustMainPadding() {
const navbarHeight = mainNavbar.clientHeight;
mainHeading.style.paddingTop = navbarHeight + "px";
}

adjustMainPadding();

window.addEventListener("resize", adjustMainPadding);

window.addEventListener("scroll", function () {
const scrolled = window.scrollY > mainNavbar.clientHeight;
if (scrolled) {
mainNavbar.classList.add("scrolled");
} else {
mainNavbar.classList.remove("scrolled");
}
});
});
$(document).ready(function () {
    $('#facebook-posts-carousel').carousel();
});

$(document).ready(function () {
    $('#facebook-posts-carousel-mobile').carousel();
});

