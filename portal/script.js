// ======================================
// STUDENT PORTAL JAVASCRIPT
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // SHOW / HIDE PASSWORD
    // ======================================

    const password = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    if (password && togglePassword) {

        togglePassword.addEventListener("click", () => {

            if (password.type === "password") {

                password.type = "text";
                togglePassword.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

            } else {

                password.type = "password";
                togglePassword.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

            }

        });

    }

    // ======================================
    // LOGIN FORM
    // ======================================

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const studentID = document.getElementById("studentID").value.trim();
            const email = document.getElementById("email").value.trim();
            const passwordValue = document.getElementById("password").value.trim();

            if (
                studentID === "" ||
                email === "" ||
                passwordValue === ""
            ) {

                showToast("Please fill in all fields.", "#dc3545");
                return;

            }

            if (!email.includes("@")) {

                showToast("Please enter a valid email.", "#dc3545");
                return;

            }

            showToast("Login Successful!", "#198754");

            localStorage.setItem("studentName", "Abisha Kamran");

            setTimeout(() => {

                window.location.href = "dashboard.html";

            }, 1200);

        });

    }

    // ======================================
    // STUDENT NAME
    // ======================================

    const studentName = document.querySelector(".student h4");

    if (studentName) {

        const savedName = localStorage.getItem("studentName");

        if (savedName) {

            studentName.textContent = savedName;

        }

    }

    // ======================================
    // LOGOUT
    // ======================================

    const logoutBtn = document.querySelector(
        'a[href="index.html"]'
    );

    if (logoutBtn) {

        logoutBtn.addEventListener("click", () => {

            localStorage.removeItem("studentName");

            showToast("Logged Out Successfully!", "#ff9800");

        });

    }

    // ======================================
    // ANIMATED DASHBOARD CARDS
    // ======================================

    const cards = document.querySelectorAll(".card h2");

    cards.forEach(card => {

        const target = parseFloat(card.innerText);

        if (!isNaN(target)) {

            let count = 0;

            const speed = target / 60;

            const counter = setInterval(() => {

                count += speed;

                if (count >= target) {

                    card.innerText = target;

                    clearInterval(counter);

                } else {

                    if (target % 1 !== 0) {

                        card.innerText = count.toFixed(2);

                    } else {

                        card.innerText = Math.floor(count);

                    }

                }

            }, 20);

        }

    });

    // ======================================
    // CARD HOVER EFFECT
    // ======================================

    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px)";

        });

    });

});

// ======================================
// TOAST MESSAGE
// ======================================

function showToast(message, color = "#1565c0") {

    const toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.top = "25px";
    toast.style.right = "25px";
    toast.style.background = color;
    toast.style.color = "#fff";
    toast.style.padding = "15px 22px";
    toast.style.borderRadius = "10px";
    toast.style.fontSize = "15px";
    toast.style.fontWeight = "500";
    toast.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";
    toast.style.zIndex = "9999";
    toast.style.opacity = "0";
    toast.style.transition = ".4s";

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "1";

    }, 100);

    setTimeout(() => {

        toast.style.opacity = "0";

        setTimeout(() => {

            toast.remove();

        }, 400);

    }, 2500);

}

// ======================================
// OPTIONAL DARK MODE
// ======================================

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    const mode = document.body.classList.contains("dark");

    localStorage.setItem("darkMode", mode);

}

window.addEventListener("load", () => {

    const darkMode = localStorage.getItem("darkMode");

    if (darkMode === "true") {

        document.body.classList.add("dark");

    }

});

// ======================================
// SCROLL TO TOP
// ======================================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "25px";
scrollBtn.style.right = "25px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#1565c0";
scrollBtn.style.color = "#fff";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
scrollBtn.style.zIndex = "999";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});
// Logout Page

const logoutButton = document.getElementById("logoutBtn");

if(logoutButton){

    logoutButton.addEventListener("click",function(){

        localStorage.clear();

        alert("You have been logged out successfully.");

        window.location.href="index.html";

    });

}