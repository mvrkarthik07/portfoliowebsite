let counter = document.getElementById('counter');
let count = 0;

// Smooth loading animation with futuristic feel
let interval = setInterval(() => {
    counter.innerText = count + '%';
    
    // Add subtle glow effect
    counter.style.textShadow = `
        0 0 ${count * 0.3}px rgba(255, 255, 255, 0.5),
        0 0 ${count * 0.6}px rgba(255, 255, 255, 0.3)
    `;
    
    count++;
    if (count > 100) {
        clearInterval(interval);
        
        // Fade out transition
        document.body.style.transition = 'opacity 0.5s ease-out';
        document.body.style.opacity = '0';
        
        setTimeout(() => {
            window.location.href = "homepage.html";
        }, 500);
    }
}, 30);