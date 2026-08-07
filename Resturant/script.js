// ===============================
// Mobile Menu Toggle
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close menu when a link is clicked
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


// ===============================
// Sticky Navbar
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 80);
});


// ===============================
// Reservation Form
// ===============================

const form = document.getElementById("reservationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    message.innerHTML = "✅ Your table has been reserved successfully!";
    message.style.color = "#4CAF50";

    form.reset();

    setTimeout(() => {
        message.innerHTML = "";
    }, 4000);

});


// ===============================
// Scroll To Top Button
// ===============================

const scrollBtn = document.createElement("div");

scrollBtn.className = "scroll-top";

scrollBtn.innerHTML = `<i class="fas fa-arrow-up"></i>`;

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Smooth Fade Animation
// ===============================

const revealElements = document.querySelectorAll(
    ".about, .menu, .services, .reservation, .reviews, .contact"
);

function reveal() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "all .8s ease";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// ===============================
// Menu Card Hover Effect
// ===============================

const cards = document.querySelectorAll(".menu-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// ===============================
// Add to Cart Demo
// ===============================

const cartButtons = document.querySelectorAll(".menu-card button");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "✔ Added";
        button.style.background = "#28a745";

        setTimeout(() => {

            button.innerHTML = "Add to Cart";
            button.style.background = "";

        }, 2000);

    });

});


// ===============================
// Current Year in Footer (Optional)
// ===============================

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML = `© ${year} Foodie's Restaurant | All Rights Reserved.`;