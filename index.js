const burger = document.getElementById("menu-icon");
const navlinks = document.querySelector("ul");
const changes = document.querySelector("nav");

burger.addEventListener("click", () => {
    burger.classList.toggle("bx-x");
    changes.classList.toggle("change");
    navlinks.classList.toggle("active");
})

window.onscroll = () => {
    navlinks.classList.remove("active");
    burger.classList.remove("bx-x");
}