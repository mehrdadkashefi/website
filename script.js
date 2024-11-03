// script.js

// Toggle theme between light and dark
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    // Toggle the "dark-theme" class on the body
    body.classList.toggle("dark-theme");

    // Update the icon based on the theme
    if (body.classList.contains("dark-theme")) {
        themeIcon.src = "icons/sun.svg"; // Change to sun icon for light mode
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.src = "icons/moon.svg"; // Change to moon icon for dark mode
        localStorage.setItem("theme", "light");
    }
}

// Check for saved theme preference in local storage
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        document.getElementById("theme-icon").src = "icons/sun.svg"; // Set to sun icon
    } else {
        document.getElementById("theme-icon").src = "icons/moon.svg"; // Set to moon icon
    }
};