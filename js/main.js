/* ═══════════════════════════════════════════════
   GymFit Store — Main JavaScript
   ═══════════════════════════════════════════════ */

function handleNavScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    if (window.scrollY > 50) { navbar.classList.add('scrolled'); }
    else { navbar.classList.remove('scrolled'); }
}

function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (!hamburger || !navLinks) return;
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
    });
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
        });
    });
}

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length === 0) return;
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            let filtered = products;
            if (filter !== 'all') { filtered = products.filter(p => p.category === filter); }
            renderProducts(filtered);
            animateCards();
        });
    });
}

function setupSportFilters() {
    const sportBtns = document.querySelectorAll('.sport-btn');
    if (sportBtns.length === 0) return;
    sportBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sportBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const sport = btn.dataset.sport;
            let filtered = products;
            if (sport !== 'all') { filtered = products.filter(p => p.sport === sport); }
            renderProducts(filtered);
            animateCards();
        });
    });
}

function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal, .stagger-children, .section-header').forEach(el => {
        observer.observe(el);
    });
}

function animateCards() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, i * 80);
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query === '') { renderProducts(products); }
        else {
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query)
            );
            renderProducts(filtered);
        }
        animateCards();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupMobileMenu();
    setupFilters();
    setupSportFilters();
    setupScrollReveal();
    setupSmoothScroll();
    setupSearch();
    animateCards();
    window.addEventListener('scroll', handleNavScroll);
    handleNavScroll();
});
