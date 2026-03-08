/* ═══════════════════════════════════════════════
   GymFit Store — Cart (LocalStorage)
   ═══════════════════════════════════════════════ */

let cart = JSON.parse(localStorage.getItem('gymfit-cart')) || [];

function saveCart() {
    localStorage.setItem('gymfit-cart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) { existing.quantity++; }
    else { cart.push({ ...product, quantity: 1 }); }
    saveCart();
    showToast(`${product.name} đã thêm vào giỏ hàng!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        const count = getCartCount();
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
        badge.style.animation = 'none';
        badge.offsetHeight;
        badge.style.animation = 'popIn 0.3s ease';
    }
}

function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✓</span> ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
