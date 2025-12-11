// Lightbox Modal for Poster Images - Professional & Smooth
class Lightbox {
    constructor() {
        this.currentIndex = 0;
        this.items = [];
        this.init();
    }

    init() {
        this.createModal();
        this.bindEvents();
    }

    createModal() {
        const modal = document.createElement('div');
        modal.className = 'lightbox-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', 'Image gallery');
        modal.innerHTML = `
            <div class="lightbox-overlay" aria-label="Close lightbox"></div>
            <button class="lightbox-close" aria-label="Close lightbox">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <button class="lightbox-prev" aria-label="Previous image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button class="lightbox-next" aria-label="Next image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
            <div class="lightbox-content">
                <img class="lightbox-image" src="" alt="" loading="eager">
                <div class="lightbox-info">
                    <h3 class="lightbox-title"></h3>
                    <p class="lightbox-description"></p>
                    <div class="lightbox-counter"></div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        this.modal = modal;
        this.overlay = modal.querySelector('.lightbox-overlay');
        this.closeBtn = modal.querySelector('.lightbox-close');
        this.prevBtn = modal.querySelector('.lightbox-prev');
        this.nextBtn = modal.querySelector('.lightbox-next');
        this.image = modal.querySelector('.lightbox-image');
        this.title = modal.querySelector('.lightbox-title');
        this.description = modal.querySelector('.lightbox-description');
        this.counter = modal.querySelector('.lightbox-counter');
    }

    bindEvents() {
        this.closeBtn.addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', () => this.close());
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        document.addEventListener('keydown', (e) => {
            if (!this.modal.classList.contains('active')) return;
            if (e.key === 'Escape') this.close();
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }

    open(index, items) {
        this.items = items;
        this.currentIndex = index;
        this.updateContent();
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        this.closeBtn.focus();
        
        // Smooth entrance animation
        requestAnimationFrame(() => {
            this.modal.style.opacity = '1';
        });
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        this.modal.style.opacity = '0';
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.updateContent();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updateContent();
    }

    updateContent() {
        const item = this.items[this.currentIndex];
        this.image.src = item.image;
        this.image.alt = item.title || 'Poster image';
        this.title.textContent = item.title || '';
        this.description.textContent = item.description || '';
        this.counter.textContent = `${this.currentIndex + 1} / ${this.items.length}`;
        
        // Show/hide navigation buttons
        this.prevBtn.style.display = this.items.length > 1 ? 'flex' : 'none';
        this.nextBtn.style.display = this.items.length > 1 ? 'flex' : 'none';
    }
}

// Initialize lightbox
const lightbox = new Lightbox();

