document.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("mouseover", () => link.style.transform = "scale(1.1)");
    link.addEventListener("mouseout", () => link.style.transform = "scale(1)");
});

document.addEventListener("DOMContentLoaded", () => {
    let path = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav__link").forEach(link => {
        if (link.getAttribute("href") === path) {
            link.classList.add("active");
        }
    });
});
