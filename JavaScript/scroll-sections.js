// Smooth Scroll-Based Content Transitions
document.addEventListener('DOMContentLoaded', () => {
    const scrollSections = document.querySelectorAll('.scroll-section');
    
    if (scrollSections.length === 0) return;

    // Intersection Observer for scroll-based animations
    const observerOptions = {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-10% 0px -10% 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const ratio = entry.intersectionRatio;
            
            if (ratio > 0.5) {
                entry.target.classList.add('section-active');
                entry.target.classList.remove('section-prev', 'section-next');
            } else if (entry.boundingClientRect.top < 0) {
                entry.target.classList.add('section-prev');
                entry.target.classList.remove('section-active', 'section-next');
            } else {
                entry.target.classList.add('section-next');
                entry.target.classList.remove('section-active', 'section-prev');
            }
        });
    }, observerOptions);

    scrollSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

