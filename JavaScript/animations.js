// Enhanced Scroll Animations and Micro-interactions
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = index * 40; // Smoother staggered delay
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1) translateZ(0)';
                        entry.target.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                        entry.target.classList.add('animated');
                    });
                }, delay);
                
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.skill-box, .text-skill-box, .hobby-card, .edu-content, .project-card, .poster-card'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) scale(0.95)';
        fadeInObserver.observe(el);
    });

    // Removed parallax for better performance - keeping smooth scroll only

    // Smooth reveal for sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('section, h2').forEach(section => {
        sectionObserver.observe(section);
    });

    // Add loading state management
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Hide any loading skeletons
        document.querySelectorAll('.skeleton').forEach(skeleton => {
            skeleton.classList.add('loaded');
        });
    });

    // Error handling for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.classList.add('image-error');
            this.alt = 'Image failed to load';
            
            // Create error placeholder
            if (!this.parentElement.querySelector('.image-error-placeholder')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'image-error-placeholder';
                placeholder.innerHTML = '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><p>Image unavailable</p>';
                this.parentElement.appendChild(placeholder);
            }
        });
        
        // Add loading state with optimized transitions
        if (!img.complete) {
            img.classList.add('image-loading');
            img.addEventListener('load', function() {
                requestAnimationFrame(() => {
                    this.classList.remove('image-loading');
                    this.classList.add('image-loaded');
                });
            });
        } else {
            img.classList.add('image-loaded');
        }
        
        // Force GPU acceleration
        img.style.transform = 'translateZ(0)';
        img.style.willChange = 'opacity';
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

