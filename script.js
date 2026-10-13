// script.js

// The theme follows the system light/dark setting (applied by a small inline
// script in each page's <head> so the page never flashes the wrong colours).
// The toggle overrides it for the current browsing session only.
function toggleTheme() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";

    root.dataset.theme = next;
    sessionStorage.setItem("theme", next);
}

// When the system setting changes while the page is open, follow it again.
(function () {
    const system = window.matchMedia("(prefers-color-scheme: dark)");

    localStorage.removeItem("theme"); // older versions saved the choice permanently

    system.addEventListener("change", function (event) {
        sessionStorage.removeItem("theme");
        document.documentElement.dataset.theme = event.matches ? "dark" : "light";
    });
})();

// Magnifying glass over the painting on the home (About) page (mouse / pen only,
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

    // Holding the lens over either man's head for one second reveals a line
    // beneath the painting. The heads sit at these fractions of the image.
    const heads = [{ x: 0.429, y: 0.537 }, { x: 0.515, y: 0.532 }];
    const headRadius = 0.035;
    const quote = document.createElement("p");
    quote.className = "revelation";
    quote.textContent = "\u201CThe understanding does not derive its laws from, but prescribes them to, nature.\u201D";
    figure.appendChild(quote);
    let dwell = null;

    function stopDwell() {
        clearTimeout(dwell);
        dwell = null;
    }

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

        const onHead = heads.some(function (head) {
            const dx = x - head.x * rect.width;
            const dy = y - head.y * rect.height;
            return Math.hypot(dx, dy) <= headRadius * rect.width;
        });
        if (!onHead) {
            stopDwell();
        } else if (!dwell) {
            dwell = setTimeout(function () {
                quote.classList.add("is-revealed");
            }, 1000);
        }
    }

    img.addEventListener("pointerenter", move);
    img.addEventListener("pointermove", move);
    img.addEventListener("pointerleave", function () {
        figure.classList.remove("is-magnifying");
        stopDwell();
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
