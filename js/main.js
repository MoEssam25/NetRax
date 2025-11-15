// Smooth scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
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
});