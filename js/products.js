/* ═══════════════════════════════════════════════
   GymFit Store — Product Data
   ═══════════════════════════════════════════════ */

const products = [
    { id: 1, name: 'Stringer Tank Pro', category: 'nam', sport: 'powerlifting', price: 450000, originalPrice: 599000, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop', badge: 'Hot', sizes: ['S','M','L','XL','XXL'], description: 'Áo Stringer Tank thoáng khí, co giãn 4 chiều, phù hợp tập nặng.' },
    { id: 2, name: 'Short 2 Lớp Elite', category: 'nam', sport: 'cardio', price: 380000, originalPrice: null, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=500&fit=crop', badge: null, sizes: ['S','M','L','XL'], description: 'Quần Short 2 lớp siêu nhẹ, lớp trong compression giữ cơ.' },
    { id: 3, name: 'Jogger Thun Lạnh', category: 'nam', sport: 'cardio', price: 520000, originalPrice: 650000, image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=500&fit=crop', badge: 'Sale', sizes: ['M','L','XL','XXL'], description: 'Jogger vải thun lạnh cao cấp, thấm hút tốt, form slim-fit.' },
    { id: 4, name: 'Oversized Gym Tee', category: 'nam', sport: 'powerlifting', price: 350000, originalPrice: null, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop', badge: 'New', sizes: ['M','L','XL','XXL'], description: 'Áo Oversized Tee cotton 100%, thoải mái cho mọi bài tập.' },
    { id: 5, name: 'Sports Bra Impact', category: 'nu', sport: 'cardio', price: 420000, originalPrice: 560000, image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop', badge: 'Hot', sizes: ['S','M','L','XL'], description: 'Áo Bra thể thao nâng đỡ tối đa, đệm êm, dây chéo lưng.' },
    { id: 6, name: 'Leggings Scrunch V2', category: 'nu', sport: 'yoga', price: 550000, originalPrice: null, image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=500&fit=crop', badge: 'Best', sizes: ['S','M','L','XL'], description: 'Quần Leggings nâng mông Scrunch, vải dày dặn, không xuyên thấu.' },
    { id: 7, name: 'Croptop Zip Hoodie', category: 'nu', sport: 'yoga', price: 480000, originalPrice: 620000, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop', badge: 'Sale', sizes: ['S','M','L'], description: 'Áo khoác Croptop khóa kéo, giữ ấm khi warm-up.' },
    { id: 8, name: 'Seamless Tank Top', category: 'nu', sport: 'cardio', price: 320000, originalPrice: null, image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=400&h=500&fit=crop', badge: null, sizes: ['S','M','L','XL'], description: 'Áo Tank không đường may, cực kỳ thoải mái khi vận động.' },
    { id: 9, name: 'Compression Shirt Pro', category: 'compression', sport: 'powerlifting', price: 650000, originalPrice: 800000, image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=500&fit=crop', badge: 'Pro', sizes: ['S','M','L','XL','XXL'], description: 'Áo nén giữ nhiệt, hỗ trợ lưu thông máu, giảm mỏi cơ.' },
    { id: 10, name: 'Compression Tights', category: 'compression', sport: 'cardio', price: 580000, originalPrice: null, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=500&fit=crop', badge: null, sizes: ['S','M','L','XL'], description: 'Quần nén full-length, công nghệ giảm rung cơ khi chạy.' },
    { id: 11, name: 'Đai Lưng Powerlifting', category: 'phukien', sport: 'powerlifting', price: 890000, originalPrice: 1200000, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop', badge: 'Pro', sizes: ['S','M','L','XL'], description: 'Đai lưng da bò 10mm, khóa lever, bảo vệ cột sống khi squat/deadlift.' },
    { id: 12, name: 'Túi Gym Duffle', category: 'phukien', sport: 'cardio', price: 450000, originalPrice: null, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop', badge: 'New', sizes: ['One Size'], description: 'Túi gym 40L chống nước, ngăn đựng giày riêng, quai đeo êm vai.' },
];

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}

function renderProducts(filteredProducts) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    if (filteredProducts.length === 0) {
        grid.innerHTML = '<p class="no-products">Không tìm thấy sản phẩm nào.</p>';
        return;
    }
    grid.innerHTML = filteredProducts.map(p => `
    <div class="product-card" data-category="${p.category}" data-sport="${p.sport}">
      <div class="product-img-wrap">
        ${p.badge ? `<span class="product-badge badge-${p.badge.toLowerCase()}">${p.badge}</span>` : ''}
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="product-overlay">
          <button class="quick-view-btn" onclick="quickView(${p.id})">Xem nhanh</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category-tag">${getCategoryName(p.category)}</span>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-footer">
          <div class="product-pricing">
            <span class="product-price">${formatPrice(p.price)}</span>
            ${p.originalPrice ? `<span class="product-original-price">${formatPrice(p.originalPrice)}</span>` : ''}
          </div>
          <button class="add-to-cart-btn" onclick="addToCart(${p.id})" aria-label="Thêm ${p.name} vào giỏ">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function getCategoryName(cat) {
    const names = { nam: 'Nam', nu: 'Nữ', compression: 'Compression', phukien: 'Phụ kiện' };
    return names[cat] || cat;
}

function quickView(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    alert(`${product.name}\n${product.description}\nGiá: ${formatPrice(product.price)}`);
}
