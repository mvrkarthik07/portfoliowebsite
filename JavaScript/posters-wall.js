// Dynamic Posters Wall - Masonry/Grid Layout
// Automatically adjusts layout when posters are added

const postersWallData = [
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
    }
];

// Dynamic masonry layout
function createMasonryLayout() {
    const wall = document.getElementById('postersWall');
    if (!wall) return;

    wall.innerHTML = postersWallData.map((poster, index) => `
        <div class="poster-wall-item" data-index="${index}">
            <div class="poster-wall-image-wrapper">
                <img src="${poster.image}" alt="${poster.title}" loading="lazy" class="poster-wall-img">
                <div class="poster-wall-overlay">
                    <div class="poster-wall-content">
                        <h3 class="poster-wall-title">${poster.title}</h3>
                        <p class="poster-wall-description">${poster.description}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Initialize lightbox
    document.querySelectorAll('.poster-wall-item').forEach(item => {
        item.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            if (typeof lightbox !== 'undefined') {
                lightbox.open(index, postersWallData);
            }
        });

        // Keyboard support
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `View ${postersWallData[parseInt(item.dataset.index)]?.title || 'poster'}`);
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const index = parseInt(this.dataset.index);
                if (typeof lightbox !== 'undefined') {
                    lightbox.open(index, postersWallData);
                }
            }
        });
    });

    // Apply masonry layout after images load
    adjustMasonryLayout();
    window.addEventListener('resize', debounce(adjustMasonryLayout, 250));
}

function adjustMasonryLayout() {
    const items = document.querySelectorAll('.poster-wall-item');
    if (items.length === 0) return;

    const container = document.getElementById('postersWall');
    const containerWidth = container.offsetWidth;
    
    // Calculate optimal columns based on screen size
    let columns = 3;
    if (containerWidth < 768) columns = 1;
    else if (containerWidth < 1024) columns = 2;
    else if (containerWidth < 1440) columns = 3;
    else columns = 4;

    const gap = 20;
    const columnWidth = (containerWidth - (gap * (columns - 1))) / columns;
    const columnHeights = new Array(columns).fill(0);

    items.forEach((item, index) => {
        const img = item.querySelector('img');
        
        // Find shortest column
        const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
        
        const top = columnHeights[shortestColumnIndex];
        const left = shortestColumnIndex * (columnWidth + gap);

        item.style.position = 'absolute';
        item.style.width = `${columnWidth}px`;
        item.style.left = `${left}px`;
        item.style.top = `${top}px`;
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px) translateZ(0)';

        // Update column height
        if (img.complete) {
            const aspectRatio = img.naturalHeight / img.naturalWidth || 1.3;
            const itemHeight = columnWidth * aspectRatio;
            columnHeights[shortestColumnIndex] += itemHeight + gap;
        } else {
            img.onload = () => {
                const aspectRatio = img.naturalHeight / img.naturalWidth || 1.3;
                const itemHeight = columnWidth * aspectRatio;
                columnHeights[shortestColumnIndex] += itemHeight + gap;
                adjustMasonryLayout();
            };
            const defaultAspectRatio = 1.3;
            const itemHeight = columnWidth * defaultAspectRatio;
            columnHeights[shortestColumnIndex] += itemHeight + gap;
        }
    });

    // Set container height
    container.style.height = `${Math.max(...columnHeights)}px`;

    // Fade in items with stagger
    items.forEach((item, index) => {
        setTimeout(() => {
            requestAnimationFrame(() => {
                item.style.transition = 'opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0) translateZ(0)';
            });
        }, index * 50);
    });
}

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

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    createMasonryLayout();
    
    // Recalculate when all images load
    const images = document.querySelectorAll('.poster-wall-img');
    let loadedCount = 0;
    
    images.forEach(img => {
        if (img.complete) {
            loadedCount++;
        } else {
            img.addEventListener('load', () => {
                loadedCount++;
                if (loadedCount === images.length) {
                    adjustMasonryLayout();
                }
            });
        }
    });
    
    if (loadedCount === images.length) {
        adjustMasonryLayout();
    }
});

