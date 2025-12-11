// Dynamic Posters Gallery
// Easy to add more posters - just add objects to the postersData array

const postersData = [
    {
        image: 'Images/Posters/musicposter.png',
        title: 'SOUNDSCAPE',
        description: 'A fusion of rhythm and visual energy. This piece captures the essence of music through abstract forms and dynamic compositions.'
    },
    {
        image: 'Images/Posters/ghost.png',
        title: 'SPECTRAL',
        description: 'Ethereal forms merge with urban aesthetics. A minimalist exploration of presence and absence in monochrome.'
    },
    {
        image: 'Images/Posters/POSTERSUNFLOWER.png',
        title: 'BLOOM',
        description: 'Nature meets futuristic design. Reimagining organic forms through a streetwear lens with bold geometric elements.'
    },
    {
        image: 'Images/Posters/OGGGG2.png',
        title: 'ORIGIN',
        description: 'Bold typography meets abstract geometry. A statement piece that defines identity through stark contrasts and clean lines.'
    },
    {
        image: 'Images/Posters/OGGGG3.png',
        title: 'EVOLUTION',
        description: 'Progressive design language combining urban edge with refined minimalism. A visual narrative of growth and transformation.'
    },
    {
        image: 'Images/Posters/poster1.jpg',
        title: 'VESSEL',
        description: 'Exploring form and space through minimalist composition. Clean lines and negative space create a powerful visual statement.'
    },
    {
        image: 'Images/Posters/poster2.jpg',
        title: 'MOMENTUM',
        description: 'Dynamic energy captured in stillness. A study of movement and balance through geometric precision and monochromatic depth.'
    },
    {
        image: 'Images/Posters/IMG_8772.PNG',
        title: 'REFLECT',
        description: 'Contemplative design exploring duality and contrast. Streetwear aesthetics meet conceptual art in monochrome harmony.'
    },
    {
        image: 'Images/Posters/IMG_8836.PNG',
        title: 'SYNTHESIS',
        description: 'Where digital meets analog. A fusion piece blending technical precision with organic flow in a futuristic composition.'
    },
    {
        image: 'Images/Posters/IMG_8925.JPG',
        title: 'FRAGMENT',
        description: 'Deconstructed forms creating new narratives. Bold experimentation with space, texture, and minimalist streetwear design.'
    },
    {
        image: 'Images/Posters/IMG_0229.JPG',
        title: 'PULSE',
        description: 'Rhythmic patterns and visual beats. An energetic composition that speaks to the heartbeat of urban culture.'
    },
    {
        image: 'Images/Posters/IMG_9273.PNG',
        title: 'VOID',
        description: 'Exploring the power of negative space. Minimalist design that challenges perception through strategic emptiness and form.'
    },
    {
        image: 'Images/Posters/IMG_9624.PNG',
        title: 'CONVERGE',
        description: 'Intersecting paths and converging lines. A geometric study of connection and direction in futuristic monochrome.'
    },
    {
        image: 'Images/Posters/033BA3E1-E969-4315-9DF0-3AEE3B0819AD.jpg',
        title: 'INFINITE',
        description: 'Endless possibilities captured in finite space. Abstract exploration of continuity and the infinite loop of creative expression.'
    },
    {
        image: 'Images/Posters/07D4A0E7-FFE8-4CF8-B47B-9D5A72D2160E.jpg',
        title: 'STRUCTURE',
        description: 'Architectural precision meets artistic freedom. A balance between rigid form and fluid expression in monochromatic design.'
    },
    {
        image: 'Images/Posters/7A7B544C-BF7C-43F6-BAE5-AEDEF935B333.jpg',
        title: 'TRANSCEND',
        description: 'Beyond boundaries. A visual journey pushing past limitations through bold composition and futuristic streetwear aesthetics.'
    },
    {
        image: 'Images/Posters/822B5F00-3627-4E5D-AE55-A6C69F2C4761.jpg',
        title: 'LUMINOUS',
        description: 'Playing with light and shadow in monochrome. Creating depth through contrast and the interplay of darkness and illumination.'
    },
    {
        image: 'Images/Posters/CAA66744-D7FB-4EE0-8E1D-3B9BE785717B.jpg',
        title: 'DIVERGE',
        description: 'Paths separate, stories unfold. A narrative piece exploring direction and choice through abstract geometric composition.'
    },
    {
        image: 'Images/Posters/ED23ECD6-3D14-4E0E-82DB-D1770E6B0ABB.jpg',
        title: 'ESSENCE',
        description: 'Capturing the core of creative vision. Minimalist streetwear design distilled to its most essential visual elements.'
    },
    {
        image: 'Images/Posters/DEE97671-7421-4218-BE37-B5686967D602.heic',
        title: 'PRISM',
        description: 'Refracted perspectives in monochrome. A study of how simple forms can create complex visual narratives through geometric abstraction.',
        note: 'Note: HEIC format may not display in all browsers - consider converting to JPG/PNG'
    }
];

// Initialize the gallery
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('posters-gallery');
    
    if (!gallery) return;
    
    if (postersData.length === 0) {
        // Show placeholder if no posters
        gallery.innerHTML = `
            <div class="poster-placeholder">
                <p>Posters will appear here</p>
                <p style="font-size: 0.8rem; margin-top: 0.5rem; opacity: 0.7;">
                    Add posters to the postersData array in posters.js
                </p>
            </div>
        `;
        return;
    }
    
    // Render all posters
    gallery.innerHTML = postersData.map((poster, index) => `
        <div class="poster-card" data-index="${index}">
            <img src="${poster.image}" alt="${poster.title}" loading="lazy">
            <div class="poster-overlay">
                <div class="poster-title">${poster.title}</div>
                <div class="poster-description">${poster.description || ''}</div>
                ${poster.instagramLink ? `
                    <a href="${poster.instagramLink}" target="_blank" rel="noopener noreferrer" class="poster-instagram-btn" aria-label="View ${poster.title} on Instagram">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        </svg>
                        Instagram
                    </a>
                ` : ''}
            </div>
        </div>
    `).join('');
    
    // Add click handlers for lightbox
    document.querySelectorAll('.poster-card').forEach(card => {
        card.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            if (typeof lightbox !== 'undefined') {
                lightbox.open(index, postersData);
            }
        });
        
        // Add keyboard support
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View ${postersData[parseInt(card.dataset.index)]?.title || 'poster'}`);
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const index = parseInt(this.dataset.index);
                if (typeof lightbox !== 'undefined') {
                    lightbox.open(index, postersData);
                }
            }
        });
    });
    
    // Intersection Observer animations handled by animations.js
    
});

