document.addEventListener("DOMContentLoaded", function () {
    // Sidebar Toggle
    const sidebar = document.querySelector("nav");
    if (sidebar) {
        sidebar.style.position = "fixed";
        sidebar.style.left = "-200px";
        sidebar.style.top = "0";
        sidebar.style.transition = "left 0.3s ease, opacity 0.3s ease";
        sidebar.style.opacity = "0";
    }
    const toggleButton = document.createElement("button");
    toggleButton.innerHTML = '<img src="img/Compass.png" alt="Menu" class="icon-style"/>';
    toggleButton.className = "toggle-button";
    toggleButton.style.background = "transparent";
    toggleButton.style.border = "none";
    toggleButton.style.padding = "10px";
    toggleButton.style.cursor = "pointer";
    
    document.body.appendChild(toggleButton);

   

    // Toggle sidebar with smooth animation
    toggleButton.addEventListener("click", function (e) {
        e.stopPropagation();
        const isOpen = sidebar.style.left === "0px";
        
        if (isOpen) {
            // Close sidebar
            sidebar.style.left = "-200px";
            sidebar.style.opacity = "0";
        } else {
            // Open sidebar
            sidebar.style.left = "0";
            sidebar.style.opacity = "1";
        }
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", function(e) {
        const isOpen = sidebar.style.left === "0px";
        const clickedOutside = !sidebar.contains(e.target) && e.target !== toggleButton;
        
        if (isOpen && clickedOutside) {
            sidebar.style.left = "-200px";
            sidebar.style.opacity = "0";
        }
    });
});

// Add page navigation functionality
const pages = [
    "index.html",
    "water-ripple-background01.html",
    "Contact-section01.html"
];

// Get current page index
let currentPage = pages.indexOf(window.location.pathname.split('/').pop());
if (currentPage === -1) currentPage = 0;

// Keyboard navigation
document.addEventListener("keydown", function(e) {
    // Only navigate if sidebar is closed
    if (sidebar.style.left !== "0px") {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            // Next page
            const nextPage = (currentPage + 1) % pages.length;
            window.location.href = pages[nextPage];
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            // Previous page
            const prevPage = (currentPage - 1 + pages.length) % pages.length;
            window.location.href = pages[prevPage];
        }
    }
});

// Touch swipe for mobile
let touchStartX = 0;
document.addEventListener("touchstart", function(e) {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener("touchend", function(e) {
    const touchEndX = e.changedTouches[0].screenX;
    if (sidebar.style.left !== "0px") { // Only if sidebar is closed
        if (touchEndX < touchStartX - 50) { // Swipe left
            const nextPage = (currentPage + 1) % pages.length;
            window.location.href = pages[nextPage];
        } else if (touchEndX > touchStartX + 50) { // Swipe right
            const prevPage = (currentPage - 1 + pages.length) % pages.length;
            window.location.href = pages[prevPage];
        }
    }
}, false);

// Add navigation buttons to each page
const navButtons = document.createElement("div");
navButtons.className = "page-nav-buttons";
navButtons.style.position = "fixed";
navButtons.style.bottom = "20px";
navButtons.style.right = "20px";
navButtons.style.zIndex = "100";
navButtons.style.display = "flex";
navButtons.style.gap = "10px";

const prevButton = document.createElement("button");
prevButton.innerHTML = "←";
prevButton.style.padding = "10px 15px";
prevButton.style.background = "rgba(0, 255, 204, 0.2)";
prevButton.style.border = "1px solid #00ffcc";
prevButton.style.borderRadius = "5px";
prevButton.style.color = "#00ffcc";
prevButton.style.cursor = "pointer";
prevButton.addEventListener("click", function() {
    const prevPage = (currentPage - 1 + pages.length) % pages.length;
    window.location.href = pages[prevPage];
});

const nextButton = document.createElement("button");
nextButton.innerHTML = "→";
nextButton.style.padding = "10px 15px";
nextButton.style.background = "rgba(0, 255, 204, 0.2)";
nextButton.style.border = "1px solid #00ffcc";
nextButton.style.borderRadius = "5px";
nextButton.style.color = "#00ffcc";
nextButton.style.cursor = "pointer";
nextButton.addEventListener("click", function() {
    const nextPage = (currentPage + 1) % pages.length;
    window.location.href = pages[nextPage];
});

navButtons.appendChild(prevButton);
navButtons.appendChild(nextButton);
document.body.appendChild(navButtons);
