// ============================
// PAGE LOADER
// ============================


window.addEventListener("load",()=>{


const loader=document.querySelector(".loader");


loader.style.opacity="0";


setTimeout(()=>{


loader.style.display="none";


},500);


});
 
// ============================
// MOBILE MENU
// ============================


const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");


menu.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});




// ============================
// BOOK NOW BUTTON
// ============================


const bookBtn = document.querySelector(".book-btn");


bookBtn.addEventListener("click",()=>{

    alert("Welcome to TravelX! Your dream journey starts here ✈️");

});





// ============================
// SEARCH BUTTON
// ============================


const searchBtn = document.querySelector(".search-box button");


searchBtn.addEventListener("click",()=>{


    searchBtn.innerHTML="Searching...";


    setTimeout(()=>{


        searchBtn.innerHTML="Search";


        alert("Amazing destinations found! 🌎");


    },1500);



});






// ============================
// DESTINATION BUTTONS
// ============================


const exploreButtons=document.querySelectorAll(".card button");


exploreButtons.forEach(button=>{


button.addEventListener("click",()=>{


    alert("Loading destination details... ✈️");


});


});







// ============================
// SCROLL ANIMATION
// ============================


const cards=document.querySelectorAll(".card");


window.addEventListener("scroll",()=>{


cards.forEach(card=>{


let position=card.getBoundingClientRect().top;


let screenHeight=window.innerHeight;



if(position < screenHeight - 100){

    card.style.opacity="1";

    card.style.transform="translateY(0)";

}



});


});






// ============================
// INITIAL CARD STYLE
// ============================


cards.forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="0.6s ease";


});
// ============================
// COUNTER ANIMATION
// ============================


const counters=document.querySelectorAll(".counter");


counters.forEach(counter=>{


let target=+counter.innerText;

let count=0;


let update=()=>{


let increment=target/100;


if(count < target){

count += increment;

counter.innerText=Math.ceil(count);

setTimeout(update,20);

}

else{

counter.innerText=target;

}


};


update();


});