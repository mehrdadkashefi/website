// script.js

// Toggle theme between light and dark.
// The initial theme is applied by a small inline script in each page's <head>
// so the page never flashes the wrong colours.
function toggleTheme() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";

    root.dataset.theme = next;
    localStorage.setItem("theme", next);
}

// Magnifying glass over the painting on the About page (mouse / pen only,
// so it never gets in the way of scrolling on touch screens).
(function () {
    const figure = document.querySelector(".painting");
    if (!figure) return;

    const img = figure.querySelector("img");
    const zoom = 2.5;

    const lens = document.createElement("div");
    lens.className = "lens";
    lens.setAttribute("aria-hidden", "true");
    lens.style.backgroundImage = `url("${img.currentSrc || img.src}")`;
    figure.appendChild(lens);

    function move(event) {
        if (event.pointerType === "touch") return;

        const rect = img.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const radius = lens.offsetWidth / 2;

        lens.style.transform = `translate(${x - radius}px, ${y - radius}px)`;
        lens.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
        lens.style.backgroundPosition = `${radius - x * zoom}px ${radius - y * zoom}px`;
        figure.classList.add("is-magnifying");
    }

    img.addEventListener("pointerenter", move);
    img.addEventListener("pointermove", move);
    img.addEventListener("pointerleave", function () {
        figure.classList.remove("is-magnifying");
    });
})();

// Email icon: besides opening the visitor's mail app, copy the address and
// say so, since mailto links do nothing when no mail app is set up.
(function () {
    const link = document.querySelector('.icons a[href^="mailto:"]');
    if (!link || !navigator.clipboard) return;

    const address = link.getAttribute("href").replace("mailto:", "");
    const note = document.createElement("span");
    note.className = "copied";
    note.setAttribute("role", "status");
    link.parentNode.appendChild(note);

    let timer;
    link.addEventListener("click", function () {
        navigator.clipboard.writeText(address).then(function () {
            note.textContent = address + " copied";
            note.classList.add("is-visible");
            clearTimeout(timer);
            timer = setTimeout(function () {
                note.classList.remove("is-visible");
            }, 2500);
        }).catch(function () {});
    });
})();
