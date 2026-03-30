let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItemsContainer = document.getElementById("cart-items");
let subtotalEl = document.getElementById("subtotal");
let totalEl = document.getElementById("total");
let cartCountEl = document.getElementById("cart-count");

function renderCart() {

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        subtotalEl.innerText = "0";
        totalEl.innerText = "0";
        cartCountEl.innerText = "0";
        return;
    }

    let subtotal = 0;

    cart.forEach((item, index) => {

        subtotal += item.price * item.quantity;

        let div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
<div>
<h3>${item.name}</h3>
<p>$${item.price}</p>
</div>

<div class="qty-controls">
<button onclick="decrease(${index})">−</button>
<span>${item.quantity}</span>
<button onclick="increase(${index})">+</button>
<button class="remove-btn" onclick="removeItem(${index})">Remove</button>
</div>
`;

        cartItemsContainer.appendChild(div);

    });

    let discount = 30;
    let total = subtotal - discount;

    subtotalEl.innerText = subtotal.toFixed(2);
    totalEl.innerText = total.toFixed(2);
    cartCountEl.innerText = cart.length;

    localStorage.setItem("cart", JSON.stringify(cart));
}

function increase(index) {
    cart[index].quantity++;
    renderCart();
}

function decrease(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
        renderCart();
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}


/* CHECKOUT */

document.getElementById("checkout-form").addEventListener("submit", function (e) {
    e.preventDefault();

    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    alert("Order placed successfully! 🎉");

    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
});

renderCart();