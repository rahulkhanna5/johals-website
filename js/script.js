// =====================================================
// DRS Sweets & Restaurant - JavaScript
// Smooth animations, menu filtering, mobile nav
// =====================================================

// ========== MOBILE NAVIGATION ========== //
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger menu
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ========== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========== SCROLL ANIMATIONS (FADE IN) ========== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add fade-in class to menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.classList.add('fade-in');
    observer.observe(item);
});

// Add fade-in class to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.classList.add('fade-in');
    observer.observe(card);
});

// ========== MENU CATEGORY FILTERING ========== //
const categoryBtns = document.querySelectorAll('.category-btn');
const menuItems = document.querySelectorAll('.menu-item');

if (categoryBtns.length > 0) {
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter menu items with animation
            menuItems.forEach((item, index) => {
                const itemCategory = item.getAttribute('data-category');
                
                // Hide all items first
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    if (category === 'all' || itemCategory === category) {
                        item.style.display = 'grid';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        item.style.display = 'none';
                    }
                }, 200);
            });
        });
    });
}

// ========== CONTACT FORM HANDLING ========== //
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create WhatsApp message
        const whatsappMessage = `
*New Inquiry from Website*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Subject:* ${subject || 'General Inquiry'}

*Message:*
${message}
        `.trim();
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // WhatsApp number (replace XXXXXXXXXX with actual number)
        const whatsappNumber = '91XXXXXXXXXX';
        
        // Open WhatsApp
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        
        // Show success message
        alert('Thank you! Your message will be sent via WhatsApp. Please confirm in the WhatsApp window.');
        
        // Reset form
        contactForm.reset();
    });
}

// ========== HEADER SCROLL EFFECT ========== //
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// ========== ACTIVE PAGE HIGHLIGHT ========== //
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    }
});

// ========== LAZY LOAD IMAGES ========== //
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========== BUTTON CLICK ANIMATIONS ========== //
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.width = ripple.style.height = '100px';
        ripple.style.left = e.clientX - this.offsetLeft - 50 + 'px';
        ripple.style.top = e.clientY - this.offsetTop - 50 + 'px';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes ripple {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

// ========== CONSOLE MESSAGE ========== //
console.log('%c🍰 DRS Sweets & Restaurant', 'color: #8B0000; font-size: 20px; font-weight: bold;');
console.log('%cWebsite loaded successfully! Made with ❤️', 'color: #D4AF37; font-size: 14px;');

// ========== PERFORMANCE: Preload Critical Images ========== //
window.addEventListener('load', () => {
    const criticalImages = [
        'https://images.unsplash.com/photo-1601050690597-df0568f70950',
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
});
