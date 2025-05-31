const scrollUp = document. 
querySelector(".scroll-Up");

window.addEventListener
("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 300) {
        scrollUp.classList.add
        ("scroll-active");
    } else {
        scrollUp.classList.remove
        ("scrollUp-active");
    }
});