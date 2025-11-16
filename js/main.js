// Smooth scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu when a link is clicked
            const menuToggle = document.getElementById('menu-toggle');
            if (menuToggle.checked) {
                menuToggle.checked = false;
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Adjust for header height
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close menu when clicking on overlay
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mainNav) {
        mainNav.addEventListener('click', function(e) {
            if (e.target === this) {
                menuToggle.checked = false;
            }
        });
    }

    // Features animation
    let features = document.querySelector(".features");
    let container = document.querySelector('.features .container');
    
    if (features && container) {
        window.addEventListener("scroll", function () {
            if (window.scrollY >= features.offsetTop - 200) {
                container.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }
        });
    }

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
            this.reset();
        });
    }

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuToggle.checked) {
            menuToggle.checked = false;
        }
    });
});