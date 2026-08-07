// Search and Open Page

const search = document.getElementById("search");

const gamePages = {

    "action": "action.html",
    "adventure": "adventure.html",
    "racing": "racing.html",
    "sports": "sports.html",
    "strategy": "strategy.html",
    "puzzle": "puzzle.html",

    "cyber battle": "action.html",
    "speed racer": "racing.html",
    "war arena": "strategy.html",
    "fantasy quest": "adventure.html"

};

search.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        const value = search.value.toLowerCase().trim();

        if (gamePages[value]) {

            window.location.href = gamePages[value];

        } else {

            alert("Game or Category Not Found!");

        }

    }

});

// Favorite Button

const favs=document.querySelectorAll(".fav");

favs.forEach(btn=>{

btn.addEventListener("click",()=>{

const icon=btn.querySelector("i");

icon.classList.toggle("fa-regular");
icon.classList.toggle("fa-solid");

icon.style.color="red";

});

});

// Play Button

const play=document.querySelectorAll(".play");

play.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Launching Game...");

});

});

// Hero Button

document.querySelector(".hero button").onclick=()=>{

document.querySelector(".games").scrollIntoView({

behavior:"smooth"

});

};