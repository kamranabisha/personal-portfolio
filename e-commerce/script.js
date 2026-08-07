// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {
    navLinks.classList.toggle("active");
};

// Cart

const cartIcon = document.querySelector(".cart-icon");
const cartSidebar = document.querySelector(".cart-sidebar");
const closeCart = document.querySelector(".close-cart");

cartIcon.onclick = () => {
    cartSidebar.classList.add("active");
};

closeCart.onclick = () => {
    cartSidebar.classList.remove("active");
};

let cart = [];

const cartItems = document.getElementById("cart-items");
const total = document.getElementById("cart-total");
const count = document.getElementById("cart-count");

// Add To Cart

document.querySelectorAll(".add-cart").forEach(btn => {

btn.addEventListener("click", () => {

const name = btn.dataset.name;
const price = Number(btn.dataset.price);

cart.push({
name,
price
});

updateCart();

});

});

function updateCart() {

    cartItems.innerHTML = "";

    let totalPrice = 0;

    cart.forEach((item, index) => {

        totalPrice += item.price;

        cartItems.innerHTML += `
        <div class="cart-item">

            <div class="cart-details">
                <h4>${item.name}</h4>
                <p>$${item.price}</p>
            </div>

            <button class="remove" onclick="removeItem(${index})">
                <i class="fa-solid fa-trash"></i>
            </button>

        </div>
        `;

    });

    // Update cart badge
    count.innerText = cart.length;

    // Update total amount
    total.innerHTML = "$" + totalPrice.toFixed(2);

}

// Remove

function removeItem(index){

cart.splice(index,1);

updateCart();

}

// Category Filter

const filterBtns = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

document.querySelector(".filter-btn.active").classList.remove("active");

btn.classList.add("active");

const category = btn.dataset.category;

products.forEach(product=>{

if(category==="all" || product.dataset.category===category){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

});

// Search

const search = document.getElementById("search");

search.addEventListener("keyup",()=>{

const value = search.value.toLowerCase();

products.forEach(product=>{

const text = product.innerText.toLowerCase();

if(text.includes(value)){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

// Checkout
document.querySelector(".checkout-btn").addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price;
    });

    alert("Order Placed Successfully!\n\nTotal Amount: $" + totalPrice.toFixed(2));

    cart = [];

    updateCart();

});
