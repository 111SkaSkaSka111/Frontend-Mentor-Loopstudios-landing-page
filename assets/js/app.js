let darkMode = localStorage.getItem("darkMode");
const navbar = document.querySelector(".navbar");
const listItems = document.querySelectorAll(".navbar ul li");
const burger = document.querySelector(".hamburger");
const toggleDarkMode = document.querySelector(".toggle-dark-mode");

window.addEventListener("scroll", () => {
    if (scrollY > 0) {
        navbar.classList.add("open");
    } else {
        navbar.classList.remove("open");
    }
});

burger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

listItems.forEach((item) => {
    item.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

const enableDarkMode = () => {
    darkMode = localStorage.setItem("darkMode", "enabled");
    toggleDarkMode.classList.add("active");
    document.body.classList.add("darkmode");
};

const disableDarkMode = () => {
    darkMode = localStorage.setItem("darkMode", null);
    toggleDarkMode.classList.remove("active");
    document.body.classList.remove("darkmode");
};

if (darkMode === "enabled") {
    enableDarkMode();
}

toggleDarkMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
