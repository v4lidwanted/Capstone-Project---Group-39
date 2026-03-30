// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartCountEl = document.getElementById("cart-count");

function updateCartCount() {
    cartCountEl.innerText = cart.length;
}

updateCartCount();

// Handle checkout form submission
let form = document.getElementById("checkout-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;

    // Simulate order confirmation
    alert(`Thank you, ${name}! Your order has been confirmed.\nTotal items: ${cart.length}`);

    // Clear cart
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    // Redirect back to homepage
    window.location.href = "index.html";
});