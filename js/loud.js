// ==========================================
// TERANGAFORGE - SCRIPT ÉLITE 2026
// ==========================================

const PROJECT_NAME = "TerangaForge";
let isMenuOpen = false;

document.addEventListener('DOMContentLoaded', () => {
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeLazyLoading();
    initializePortfolioFilter();
    createForgeParticles();
    console.log(`${PROJECT_NAME} est prêt !`);
});

// ==========================================
// MENU MOBILE
// ==========================================
function initializeMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const nav    = document.getElementById('mobileNav');
    if (!toggle || !nav) return;

    const close = () => {
        isMenuOpen = false;
        nav.classList.add('translate-x-full');
        nav.classList.remove('translate-x-0');
        document.body.style.overflow = '';
    };

    toggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        nav.classList.toggle('translate-x-full', !isMenuOpen);
        nav.classList.toggle('translate-x-0', isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    });

    const closeBtn = document.getElementById('closeMobileMenu');
    if (closeBtn) closeBtn.addEventListener('click', close);

    // Fermer au clic sur un lien (BUGFIX: utilisait .active au lieu de translate-x-*)
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', close);
    });
}

// ==========================================
// FILTRE PORTFOLIO (index.html)
// ==========================================
function initializePortfolioFilter() {
    const tabs  = document.querySelectorAll('.portfolio-tab');
    const cards = document.querySelectorAll('[data-category]');
    if (!tabs.length || !cards.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.dataset.filter;

            // Mise à jour visuelle des onglets
            tabs.forEach(t => {
                t.classList.remove('bg-white', 'text-primary', 'shadow-sm', 'border', 'border-gray-200');
                t.classList.add('text-gray-400');
            });
            tab.classList.remove('text-gray-400');
            tab.classList.add('bg-white', 'text-primary', 'shadow-sm', 'border', 'border-gray-200');

            // Filtrage des cartes
            cards.forEach(card => {
                const match = filter === 'tous' || card.dataset.category === filter;
                card.style.display = match ? '' : 'none';
            });
        });
    });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });
}

// ==========================================
// LAZY LOADING
// ==========================================
function initializeLazyLoading() {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const img = e.target;
                if (img.dataset.src) { img.src = img.dataset.src; }
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '200px' });
    document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
}

// ==========================================
// PARTICULES DE FORGE (hero section)
// ==========================================
function createForgeParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    for (let i = 0; i < 12; i++) {
        const p = document.createElement('div');
        const size = Math.random() * 5 + 2;
        Object.assign(p.style, {
            position: 'absolute', width: `${size}px`, height: `${size}px`,
            background: 'rgba(139,92,246,0.5)', borderRadius: '50%',
            bottom: '0', left: `${Math.random() * 100}%`,
            pointerEvents: 'none', zIndex: '0'
        });
        hero.appendChild(p);
        p.animate([
            { transform: 'translateY(0) scale(1)', opacity: 0.5 },
            { transform: `translateY(-${Math.random() * 200 + 100}px) scale(0)`, opacity: 0 }
        ], { duration: Math.random() * 3000 + 2000, iterations: Infinity });
    }
}

// ==========================================
// NOTIFICATIONS TOAST
// ==========================================
function showNotification(message, type = 'success') {
    const toast = document.createElement('div');
    Object.assign(toast.style, {
        position: 'fixed', bottom: '20px', left: '50%',
        transform: 'translateX(-50%)',
        background: '#0F172A', color: 'white',
        padding: '14px 28px', borderRadius: '50px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        zIndex: '9999', fontFamily: 'Inter, sans-serif', fontSize: '14px',
        borderBottom: type === 'success' ? '3px solid #10B981' : '3px solid #EF4444'
    });
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

// Back to top
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

window.TerangaForge = { showNotification };
