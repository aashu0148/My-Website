const body = document.body;
const loaderContainer = document.querySelector(".loader-container");
const burger = document.querySelector(".burger-box");
const largeUl = document.querySelector("navbar .large-ul");
const changingText = document.querySelector(".header-left .changing-text")


function init() {
    body.classList.remove("overflow-hidden");
    loaderContainer.style.display = "none";
    writeText();
}
burger.addEventListener("click", () => {
    burger.classList.toggle("active-ham");
    largeUl.classList.toggle("active-list");
    setTimeout(() => {
        document.documentElement.classList.toggle("overflow-hidden");
    }, 300)
})

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