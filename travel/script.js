// ============================
// PAGE LOADER
// ============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});


// ============================
// MOBILE MENU
// ============================

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

if (menu && navLinks) {

    menu.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// ============================
// NAVBAR LINKS
// ============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("active");

        }

    });

});


// ============================
// BOOK NOW BUTTON
// ============================

const bookBtn = document.querySelector(".book-btn");

if (bookBtn) {

    bookBtn.addEventListener("click", () => {

        const name = prompt("Enter your name:");

        if (!name) {

            alert("Please enter your name.");

            return;

        }

        const destination = prompt(
            "Where would you like to travel?"
        );

        if (!destination) {

            alert("Please enter your destination.");

            return;

        }

        const guests = prompt(
            "How many people are travelling?"
        );

        if (!guests) {

            alert("Please enter number of guests.");

            return;

        }

        alert(
            `Thank you ${name}! ✈️\n\n` +
            `Destination: ${destination}\n` +
            `Guests: ${guests}\n\n` +
            `Our travel team will contact you soon.`
        );

    });

}


// ============================
// START EXPLORING
// ============================

const startBtn = document.querySelector(".primary-btn");

if (startBtn) {

    startBtn.addEventListener("click", () => {

        document.querySelector("#destinations")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}


// ============================
// VIEW PACKAGES
// ============================

const packagesBtn = document.querySelector(".secondary-btn");

if (packagesBtn) {

    packagesBtn.addEventListener("click", () => {

        document.querySelector("#packages")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}


// ============================
// SEARCH BUTTON
// ============================

const searchBtn =
    document.querySelector(".search-box button");

if (searchBtn) {

    searchBtn.addEventListener("click", () => {

        const destination = prompt(
            "Enter your destination:"
        );

        if (!destination) {

            alert("Please enter a destination.");

            return;

        }

        const date = prompt(
            "Enter your travel date:"
        );

        if (!date) {

            alert("Please enter your travel date.");

            return;

        }

        const guests = prompt(
            "How many guests?"
        );

        if (!guests) {

            alert("Please enter number of guests.");

            return;

        }

        searchBtn.innerHTML = "Searching...";

        setTimeout(() => {

            searchBtn.innerHTML = "Search";

            alert(
                `✈️ Travel Search Complete!\n\n` +
                `Destination: ${destination}\n` +
                `Date: ${date}\n` +
                `Guests: ${guests}\n\n` +
                `Great travel options are available!`
            );

        }, 1000);

    });

}


// ============================
// DESTINATION BUTTONS
// ============================

const exploreButtons =
    document.querySelectorAll(".card button");

exploreButtons.forEach(button => {

    button.addEventListener("click", () => {

        const destination =
            button.dataset.destination;

        const details = {

            "Maldives":
                "🏝️ Maldives\n\nBeautiful beaches, crystal-clear water and luxury resorts.\n\nPerfect for relaxing holidays and romantic trips.",

            "New York":
                "🗽 New York\n\nExplore Times Square, Central Park, museums and famous city attractions.\n\nPerfect for city adventures.",

            "Switzerland":
                "🏔️ Switzerland\n\nEnjoy beautiful mountains, snow-covered landscapes and peaceful villages.\n\nPerfect for adventure and nature lovers."

        };

        alert(
            details[destination] ||
            "Destination details coming soon!"
        );

    });

});


// ============================
// PACKAGE BOOKING
// ============================

const packageButtons =
    document.querySelectorAll(".package-btn");

packageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const packageName =
            button.dataset.package;

        const name = prompt(
            `Booking: ${packageName}\n\nEnter your name:`
        );

        if (!name) {

            alert("Booking cancelled.");

            return;

        }

        const email = prompt(
            "Enter your email:"
        );

        if (!email || !email.includes("@")) {

            alert("Please enter a valid email.");

            return;

        }

        const guests = prompt(
            "How many guests?"
        );

        if (!guests) {

            alert("Please enter number of guests.");

            return;

        }

        alert(
            `🎉 Booking Request Submitted!\n\n` +
            `Package: ${packageName}\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Guests: ${guests}\n\n` +
            `Thank you for choosing TravelX!`
        );

    });

});


// ============================
// NEWSLETTER
// ============================

const subscribeBtn =
    document.querySelector("#subscribeBtn");

const emailInput =
    document.querySelector("#emailInput");

if (subscribeBtn) {

    subscribeBtn.addEventListener("click", () => {

        const email =
            emailInput.value.trim();

        if (email === "") {

            alert("Please enter your email.");

            emailInput.focus();

            return;

        }

        if (!email.includes("@") ||
            !email.includes(".")) {

            alert("Please enter a valid email address.");

            emailInput.focus();

            return;

        }

        alert(
            "🎉 Thank you for subscribing!\n\n" +
            "You will receive our latest travel deals."
        );

        emailInput.value = "";

    });

}


// ============================
// SCROLL ANIMATION
// ============================

const cards =
    document.querySelectorAll(".card");

function revealCards() {

    cards.forEach(card => {

        const position =
            card.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (position < screenHeight - 100) {

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        }

    });

}


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(50px)";

    card.style.transition =
        "0.6s ease";

});


window.addEventListener(
    "scroll",
    revealCards
);

window.addEventListener(
    "load",
    revealCards
);


// ============================
// COUNTER ANIMATION
// ============================

const counters =
    document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target =
        Number(counter.innerText);

    let count = 0;

    const duration = 1500;

    const startTime = performance.now();

    function updateCounter(currentTime) {

        const progress =
            Math.min(
                (currentTime - startTime) / duration,
                1
            );

        count =
            Math.floor(progress * target);

        counter.innerText =
            count.toLocaleString();

        if (progress < 1) {

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText =
                target.toLocaleString();

        }

    }

    requestAnimationFrame(updateCounter);

});