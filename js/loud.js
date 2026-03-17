=// ==========================================
// TERANGAFORGE - SCRIPT ÉLITE 2026
// ==========================================

// Variables globales
let isMenuOpen = false;
const PROJECT_NAME = "TerangaForge";

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    initializeScrollEffects();
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeFormValidation();
    initializeLazyLoading();
    createForgeParticles(); // Nouvel effet visuel !
    console.log(`${PROJECT_NAME} est prêt !`);
});

// ==========================================
// EFFET VISUEL : PARTICULES DE FORGE
// ==========================================
function createForgeParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'forge-particle';
        const size = Math.random() * 5 + 2;
        
        Object.assign(particle.style, {
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            background: 'var(--color-primary)',
            borderRadius: '50%',
            opacity: '0.6',
            bottom: '0',
            left: `${Math.random() * 100}%`,
            pointerEvents: 'none',
            zIndex: '0'
        });

        hero.appendChild(particle);
        animateParticle(particle);
    }
}

function animateParticle(p) {
    const duration = Math.random() * 3000 + 2000;
    const destinationY = -(Math.random() * 200 + 100);
    
    p.animate([
        { transform: 'translateY(0) scale(1)', opacity: 0.6 },
        { transform: `translateY(${destinationY}px) scale(0)`, opacity: 0 }
    ], { duration: duration, iterations: Infinity });
}

// ==========================================
// MENU MOBILE (Optimisé)
// ==========================================
function initializeMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('mobileNav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        nav.classList.toggle('active', isMenuOpen);
        toggle.classList.toggle('active', isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    });

    // Fermer si on clique sur un lien
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggle.classList.remove('active');
            document.body.style.overflow = '';
            isMenuOpen = false;
        });
    });
}

// ==========================================
// NOTIFICATIONS (Plus belles)
// ==========================================
function showNotification(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `notification show ${type}`;
    toast.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-weight:bold;">${PROJECT_NAME} :</span> ${message}
        </div>
    `;
    
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: type === 'success' ? '#1A1A1A' : '#ff3d00',
        color: 'white',
        padding: '15px 30px',
        borderRadius: '50px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        zIndex: '9999',
        borderBottom: '3px solid var(--color-primary)'
    });

    document.body.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3500);
}

// ==========================================
// EXPORT POUR LE HTML
// ==========================================
window.TerangaForge = {
    showNotification,
    toggleMenu: initializeMobileMenu
};

// Gestion du bouton retour en haut (Back To Top)
const backToTop = document.getElementById("backToTop");
if (backToTop) {
    window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 300 ? "flex" : "none";
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Reste des fonctions (SmoothScroll, LazyLoading, etc.) gardées intactes
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}