// Back To Top Button
const backToTopButton = document.getElementById("backToTop");
let isButtonVisible = false;

window.addEventListener("scroll", () => {
    if (window.scrollY > 300 && !isButtonVisible) {
        backToTopButton.style.display = "block";

        backToTopButton.classList.add("show");

        setTimeout(() => {
            backToTopButton.classList.remove("show");
        }, 500);

        isButtonVisible = true;

    } else if (window.scrollY <= 300 && isButtonVisible) {
        backToTopButton.style.display = "none";
        isButtonVisible = false;
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});