document.addEventListener("DOMContentLoaded", function () {
    const rippleBackground = document.getElementById("rippleBackground");

    if (!rippleBackground) {
        console.error("Error: #rippleBackground element not found.");
        return;
    }

    function createRipple() {
        const ripple = document.createElement("div");
        ripple.classList.add("ripple");

        const size = Math.random() * 80 + 40; // Ensures size is between 40px and 120px
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${Math.random() * 100}vw`;
        ripple.style.top = `${Math.random() * 100}vh`;
        ripple.style.animationDelay = `${Math.random() * 3}s`; // Adds random delay to effect

        rippleBackground.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 6000); // Remove after animation
    }

    setInterval(createRipple, 750);

    // Page Navigation Functionality
    const pages = [
        "Home.html",
        "projects.html",
        "water-ripple-background01.html",
        "Contact-section01.html"
    ];

    let currentPage = pages.indexOf(window.location.pathname.split('/').pop());
    if (currentPage === -1) currentPage = 0;

    const sidebar = document.getElementById("sidebar"); // Check if sidebar exists

    document.addEventListener("keydown", function (e) {
        if (!sidebar || sidebar.style.left !== "0px") {
            if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                window.location.href = pages[(currentPage + 1) % pages.length];
            } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                window.location.href = pages[(currentPage - 1 + pages.length) % pages.length];
            }
        }
    });

    // Touch swipe for mobile navigation
    let touchStartX = 0;
    document.addEventListener("touchstart", function (e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    document.addEventListener("touchend", function (e) {
        const touchEndX = e.changedTouches[0].screenX;
        if (!sidebar || sidebar.style.left !== "0px") {
            if (touchEndX < touchStartX - 50) {
                window.location.href = pages[(currentPage + 1) % pages.length];
            } else if (touchEndX > touchStartX + 50) {
                window.location.href = pages[(currentPage - 1 + pages.length) % pages.length];
            }
        }
    }, false);

    // Navigation Buttons
    const navButtons = document.createElement("div");
    navButtons.className = "page-nav-buttons";
    navButtons.style.position = "fixed";
    navButtons.style.bottom = "20px";
    navButtons.style.right = "20px";
    navButtons.style.zIndex = "100";
    navButtons.style.display = "flex";
    navButtons.style.gap = "10px";

    function createNavButton(text, direction) {
        const button = document.createElement("button");
        button.innerHTML = text;
        button.style.padding = "10px 15px";
        button.style.background = "rgba(23, 164, 136, 0.12)";
        button.style.border = "1px solid #00ffcc";
        button.style.borderRadius = "5px";
        button.style.color = "#00ffcc";
        button.style.cursor = "pointer";
        button.addEventListener("click", function () {
            const newPage = direction === "next" ?
                (currentPage + 1) % pages.length :
                (currentPage - 1 + pages.length) % pages.length;
            window.location.href = pages[newPage];
        });
        return button;
    }

    navButtons.appendChild(createNavButton("←", "prev"));
    navButtons.appendChild(createNavButton("→", "next"));
    document.body.appendChild(navButtons);
});
