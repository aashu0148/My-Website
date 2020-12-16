const body = document.body;
const navCont = document.querySelector(".nav-cont");
const navbar = document.querySelector("navbar");
const navLinks = document.querySelectorAll("#nav-link");
const loaderContainer = document.querySelector(".loader-container");
const burger = document.querySelector(".burger-box");
const largeUl = document.querySelector("navbar .large-ul");
const changingText = document.querySelector(".header-left .changing-text")


function init() {
    document.documentElement.classList.remove("overflow-hidden");
    loaderContainer.style.display = "none";
    navCont.style.height = `${navbar.offsetHeight}px`;
    writeText();
}
burger.addEventListener("click", () => {
    burger.classList.toggle("active-ham");
    largeUl.classList.toggle("active-list");
    setTimeout(() => {
        document.documentElement.classList.toggle("overflow-hidden");
    }, 300)
})

//navbar
navLinks.forEach(e => {
    e.addEventListener("click", () => {
        burger.classList.toggle("active-ham");
        largeUl.classList.add("no-transition");
        largeUl.classList.toggle("active-list");
        document.documentElement.classList.toggle("overflow-hidden");
        setTimeout(() => {
            largeUl.classList.remove("no-transition");
        }, 100)
    })
})

//fixed navbar

var prevScroll = window.pageYOffset;
let navHeight = navbar.offsetHeight;
function fixedNav() {
    if (window.pageYOffset >= navHeight + 200) {
        navbar.classList.add("fixed-nav");
    } else {
        if (window.pageYOffset < navHeight / 4) {
            navbar.classList.remove("fixed-nav");
        }
    }
    if (window.pageYOffset < prevScroll) {
        navbar.style.top = "0%";
    } else {
        navbar.style.top = `-${navHeight + 20}px`;
    }
    prevScroll = window.pageYOffset;
}

window.addEventListener("scroll", fixedNav);


// header-left
let words = "Developer Student ";
let toPrint = "";
var curr = 0;
let timer = 150;

function writeText() {
    if (words.charAt(curr) == " ") {
        timer = 2000;
        setTimeout(() => {
            changingText.textContent = "";
        }, timer)
    } else {
        timer = 150;
    }
    changingText.textContent = changingText.textContent + words.charAt(curr);
    curr++;
    if (curr < words.length) {
        window.setTimeout(writeText, timer);
    } else {
        curr = 0;
        timer = 2000;
        window.setTimeout(() => {
            changingText.textContent = "";
            writeText();
        }, timer);
    }
}






window.addEventListener("load", init);