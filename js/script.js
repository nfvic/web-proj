document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    const products = [
        {
            id: 1,
            title: "Wireless Headphones",
            price: 59.99,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg"
        },
        {
            id: 2,
            title: "Smart Watch",
            price: 89.99,
            image: "https://images.pexels.com/photos/2861929/pexels-photo-2861929.jpeg"
        },
        {
            id: 3,
            title: "Bluetooth Speaker",
            price: 39.99,
            image: "https://images.pexels.com/photos/14309813/pexels-photo-14309813.jpeg"
        },
        {
            id: 4,
            title: "USB-C Charger",
            price: 19.99,
            image: "https://images.pexels.com/photos/3921711/pexels-photo-3921711.jpeg"
        }
    ];

    const container = document.querySelector('#product-container');
    if (container) {
        displayProducts(products, container);
    }

    if (document.getElementById('cart-items')) {
        loadCart();
    }

    updateCartCount();
});

function displayProducts(products, container) {
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart(productId) {
    const products = [
        {
            id: 1,
            title: "Wireless Headphones",
            price: 59.99,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg"
        },
        {
            id: 2,
            title: "Smart Watch",
            price: 89.99,
            image: "https://images.pexels.com/photos/2861929/pexels-photo-2861929.jpeg"
        },
        {
            id: 3,
            title: "Bluetooth Speaker",
            price: 39.99,
            image: "https://images.pexels.com/photos/14309813/pexels-photo-14309813.jpeg"
        },
        {
            id: 4,
            title: "USB-C Charger",
            price: 19.99,
            image: "https://images.pexels.com/photos/3921711/pexels-photo-3921711.jpeg"
        }
    ];

    const selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(selectedProduct);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function loadCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    let total = 0;

    cartItemsContainer.innerHTML = cart.map(item => {
        total += item.price;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" style="width: 50px;">
                <span>${item.title}</span>
                <span>$${item.price.toFixed(2)}</span>
            </div>
        `;
    }).join('');

    totalPriceEl.textContent = total.toFixed(2);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCount.textContent = cart.length;
    }
}

