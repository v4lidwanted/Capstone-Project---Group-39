// CART STORAGE
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// UPDATE CART COUNT
function updateCartCount() {

    let cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.innerText = cart.length;
    }

}


// ADD TO CART FUNCTION
function addToCart(productName, price) {

    let product = {
        name: productName,
        price: price,
        quantity: 1
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(productName + " added to cart!");

}


// ATTACH BUTTON EVENTS

document.querySelectorAll(".product-card").forEach(card => {

    let name = card.querySelector("h3").innerText;

    let priceText = card.querySelector(".price").innerText;

    let price = parseFloat(priceText.replace("$", ""));
    // let price = parseFloat(priceText.replace(/[^\d.]/g, ""));

    let button = card.querySelector(".add-cart");

    button.addEventListener("click", () => {

        addToCart(name, price);

    });

});


// INITIAL LOAD
updateCartCount();