// Fungsi untuk mengecek apakah elemen berada dalam viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Fungsi untuk menambahkan class animate ke elemen yang terlihat
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.about-content img, .project-card, .contact-form');
    
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animate');
        }
    });
}

// Event listener untuk scroll
window.addEventListener('scroll', handleScrollAnimation);

// Fungsi untuk efek ketik
function typeWriter(element, text, speed = 100, delay = 2000) {
    let i = 0;
    const nameStart = text.indexOf('Sandi Pranata');
    
    function type() {
        if (i < text.length) {
            if (i === nameStart) {
                element.innerHTML += '<span class="name">';
            }
            element.innerHTML += text.charAt(i);
            if (i === nameStart + 'Sandi Pranata'.length - 1) {
                element.innerHTML += '</span>';
            }
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                element.innerHTML = '';
                i = 0;
                type();
            }, delay);
        }
    }
    
    type();
}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi efek ketik
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        typeWriter(typingElement, 'Hallo, saya Sandi Pranata', 150, 3000);
    }
    
    handleScrollAnimation();
    
    // Smooth scroll untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Animasi untuk form kontak
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

// Animasi hover untuk project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
}); 