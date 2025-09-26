// Product data with real images from Unsplash
const products = [
    {
        id: 1,
        title: "Men's Cotton Kurta",
        category: "clothing",
        price: 1299,
        originalPrice: 1999,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        description: "Comfortable cotton kurta for men, perfect for casual wear and festive occasions. Made from 100% pure cotton with traditional embroidery."
    },
    {
        id: 3,
        title: "Smartphone",
        category: "electronics",
        price: 15999,
        originalPrice: 19999,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        description: "Latest smartphone with high-resolution camera and long-lasting battery. Features 6.5-inch display and 128GB storage."
    },
    {
        id: 4,
        title: "Wireless Headphones",
        category: "electronics",
        price: 2499,
        originalPrice: 3999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Noise-cancelling wireless headphones with premium sound quality. Up to 30 hours of battery life with quick charge."
    },
    {
        id: 5,
        title: "Non-Stick Cookware Set",
        category: "home",
        price: 2999,
        originalPrice: 4999,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Complete non-stick cookware set for your kitchen, durable and easy to clean. Includes 5 pieces with ergonomic handles."
    },
    {
        id: 6,
        title: "Traditional Floor Lamp",
        category: "home",
        price: 1899,
        originalPrice: 2599,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        description: "Elegant floor lamp with traditional design, perfect for living rooms. Adjustable brightness with energy-efficient LED."
    },
    {
        id: 7,
        title: "Gold Plated Earrings",
        category: "jewelry",
        price: 899,
        originalPrice: 1499,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Beautiful gold plated earrings with precious stone detailing. Hypoallergenic and suitable for sensitive ears."
    },
    {
        id: 8,
        title: "Silver Bracelet",
        category: "jewelry",
        price: 1299,
        originalPrice: 1999,
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
        description: "Elegant silver bracelet with traditional patterns, perfect for any occasion. Adjustable size with secure clasp."
    },
    {
        id: 9,
        title: "Men's Formal Shirt",
        category: "clothing",
        price: 999,
        originalPrice: 1499,
        image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        description: "Premium cotton formal shirt for office wear and formal events. Available in multiple sizes and colors."
    },
    {
        id: 10,
        title: "Women's Kurti",
        category: "clothing",
        price: 799,
        originalPrice: 1299,
        image: "https://images.unsplash.com/photo-1589810635657-232948472d98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Comfortable and stylish kurti for women, available in various colors. Perfect for daily wear and casual outings."
    },
    {
        id: 11,
        title: "Laptop",
        category: "electronics",
        price: 45999,
        originalPrice: 59999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        description: "High-performance laptop for work and entertainment with latest processor. 15.6-inch display with 8GB RAM and 512GB SSD."
    },
    {
        id: 12,
        title: "Smart Watch",
        category: "electronics",
        price: 3999,
        originalPrice: 5999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80",
        description: "Feature-rich smartwatch with health monitoring and notification alerts. Water-resistant with 7-day battery life."
    },
    {
        id: 13,
        title: "Handcrafted Pottery Set",
        category: "home",
        price: 1599,
        originalPrice: 2299,
        image: "https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
        description: "Beautiful handcrafted pottery set for your dining table. Microwave and dishwasher safe with unique designs."
    },
    {
        id: 14,
        title: "Traditional Wall Art",
        category: "home",
        price: 1299,
        originalPrice: 1899,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Traditional Indian wall art with vibrant colors and intricate patterns. Ready to hang with premium frame."
    },
    {
        id: 15,
        title: "Diamond Necklace",
        category: "jewelry",
        price: 12999,
        originalPrice: 18999,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Exquisite diamond necklace with certified stones. Perfect for special occasions and weddings."
    },
    {
        id: 16,
        title: "Tablet",
        category: "electronics",
        price: 19999,
        originalPrice: 25999,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "High-performance tablet with 10.5-inch display and stylus support. Perfect for work and entertainment."
    }
];

// Format price in Indian Rupees
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(price);
}

// Calculate discount percentage
function calculateDiscount(originalPrice, currentPrice) {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
    
    // Show confirmation with animation
    showCartNotification(`${quantity} ${product.title} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

function updateCartItemQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = formatPrice(0);
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-quantity">
                    <button class="decrease-quantity" data-id="${item.id}">-</button>
                    <input type="number" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="increase-quantity" data-id="${item.id}">+</button>
                </div>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = formatPrice(total);
    
    // Add event listeners to cart items
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const item = cart.find(item => item.id === id);
            if (item) {
                updateCartItemQuantity(id, item.quantity - 1);
            }
        });
    });
    
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const item = cart.find(item => item.id === id);
            if (item) {
                updateCartItemQuantity(id, item.quantity + 1);
            }
        });
    });
    
    document.querySelectorAll('.cart-item-quantity input').forEach(input => {
        input.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            const newQuantity = parseInt(e.target.value);
            if (!isNaN(newQuantity) && newQuantity > 0) {
                updateCartItemQuantity(id, newQuantity);
            }
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            removeFromCart(id);
        });
    });
}

// Filter products
function filterProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">No products found in this category.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const discount = calculateDiscount(product.originalPrice, product.price);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="price-container">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    <span class="original-price">${formatPrice(product.originalPrice)}</span>
                    <span class="discount">${discount}% OFF</span>
                </div>
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                <button class="view-details-btn" data-id="${product.id}">View Details</button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Add event listeners to buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        });
    });
    
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            openProductModal(productId);
        });
    });
}

// Modal functionality
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    const discount = calculateDiscount(product.originalPrice, product.price);
    
    document.getElementById('modalImg').src = product.image;
    document.getElementById('modalImg').alt = product.title;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalPrice').textContent = formatPrice(product.price);
    document.getElementById('modalOriginalPrice').textContent = formatPrice(product.originalPrice);
    document.getElementById('modalDiscount').textContent = `${discount}% OFF`;
    
    document.getElementById('modalAddToCart').dataset.id = product.id;
    document.getElementById('quantity').value = 1;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Cart sidebar functionality
function openCartSidebar() {
    document.getElementById('cartSidebar').classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeCartSidebar() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Notification system
function showCartNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.cart-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #138808;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1002;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add keyframes for animation
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Search functionality
function setupSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search products...';
    searchInput.className = 'search-input';
    
    const filtersSection = document.querySelector('.filters');
    filtersSection.appendChild(searchInput);
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        if (searchTerm.length < 2) {
            // If search term is too short, show all products
            const activeFilter = document.querySelector('.filter-btn.active');
            filterProducts(activeFilter ? activeFilter.dataset.filter : 'all');
            return;
        }
        
        const filteredProducts = products.filter(product => 
            product.title.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
        
        const productsGrid = document.getElementById('productsGrid');
        productsGrid.innerHTML = '';
        
        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = '<p class="no-products">No products found matching your search.</p>';
            return;
        }
        
        filteredProducts.forEach(product => {
            const discount = calculateDiscount(product.originalPrice, product.price);
            
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="price-container">
                        <span class="current-price">${formatPrice(product.price)}</span>
                        <span class="original-price">${formatPrice(product.originalPrice)}</span>
                        <span class="discount">${discount}% OFF</span>
                    </div>
                    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                    <button class="view-details-btn" data-id="${product.id}">View Details</button>
                </div>
            `;
            
            productsGrid.appendChild(productCard);
        });
        
        // Add event listeners to buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.id);
                addToCart(productId);
            });
        });
        
        document.querySelectorAll('.view-details-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.id);
                openProductModal(productId);
            });
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load initial products
    filterProducts('all');
    
    // Update cart count
    updateCartCount();
    updateCartDisplay();
    
    // Setup search functionality
    setupSearch();
    
    // Filter button event listeners
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            e.target.classList.add('active');
            
            // Filter products
            const category = e.target.dataset.filter;
            filterProducts(category);
            
            // Clear search input
            document.querySelector('.search-input').value = '';
        });
    });
    
    // Modal event listeners
    document.querySelector('.close').addEventListener('click', closeProductModal);
    document.getElementById('modalAddToCart').addEventListener('click', (e) => {
        const productId = parseInt(e.target.dataset.id);
        const quantity = parseInt(document.getElementById('quantity').value) || 1;
        addToCart(productId, quantity);
        closeProductModal();
    });
    
    // Cart event listeners
    document.getElementById('cartIcon').addEventListener('click', openCartSidebar);
    document.querySelector('.close-cart').addEventListener('click', closeCartSidebar);
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('productModal');
        if (e.target === modal) {
            closeProductModal();
        }
        
        const cartSidebar = document.getElementById('cartSidebar');
        if (e.target === cartSidebar) {
            closeCartSidebar();
        }
    });
    
    // Checkout button
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) {
            showCartNotification('Your cart is empty!');
            return;
        }
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        showCartNotification(`Order placed successfully! Total: ${formatPrice(total)}`);
        
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartDisplay();
        closeCartSidebar();
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // ESC key closes modals
        if (e.key === 'Escape') {
            closeProductModal();
            closeCartSidebar();
        }
        
        // Ctrl+K focuses search (if it exists)
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-input');
            if (searchInput) searchInput.focus();
        }
    });
});