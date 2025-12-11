const message = "Welcome To My Portfolio.";
const speed = 50;
let i = 0;
function typeWriter(){
    if(i<message.length){
        document.getElementById("typed-text").textContent += message.charAt(i);
        i++
        setTimeout(typeWriter,speed);
    }

}window.onload = typeWriter;

window.addEventListener('DOMContentLoaded',()=>{
const fadeTarget = document.getElementById('skill-fade');


const observer = new IntersectionObserver((entries)=> {
    entries.forEach(entry=> {
        if(entry.isIntersecting){
            fadeTarget.classList.add('show');
            fadeTarget.classList.remove('hidden');
        }else{
            fadeTarget.classList.remove('show');
            fadeTarget.classList.add('hidden');
            
        }
    });

},{root:null,threshold:0.5}
);
observer.observe(fadeTarget);});

// Monochromatic scroll effect - subtle brightness changes
window.addEventListener("DOMContentLoaded", () => {
  // Monochromatic gradient stops (black to slightly lighter black)
  const gradientStops = [
    [[0, 0, 0], [0, 0, 0]],        // Pure black
    [[5, 5, 5], [3, 3, 3]],        // Slight variation
    [[8, 8, 8], [5, 5, 5]],        // Subtle lightening
    [[10, 10, 10], [8, 8, 8]],     // More variation
    [[5, 5, 5], [3, 3, 3]],        // Back to darker
    [[0, 0, 0], [0, 0, 0]]         // Back to pure black
  ];

  window.addEventListener("scroll", () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPos = window.scrollY;
    const progress = Math.min(scrollPos / maxScroll, 1);

    const stepCount = gradientStops.length - 1;
    const totalProgress = progress * stepCount;
    const lowerIndex = Math.floor(totalProgress);
    const upperIndex = Math.min(lowerIndex + 1, stepCount);
    const stepProgress = totalProgress - lowerIndex;

    const [leftStart, rightStart] = gradientStops[lowerIndex];
    const [leftEnd, rightEnd] = gradientStops[upperIndex];

    const interp = (s, e) => Math.round(s + (e - s) * stepProgress);

    const leftColor = `rgb(${interp(leftStart[0], leftEnd[0])}, ${interp(leftStart[1], leftEnd[1])}, ${interp(leftStart[2], leftEnd[2])})`;
    const rightColor = `rgb(${interp(rightStart[0], rightEnd[0])}, ${interp(rightStart[1], rightEnd[1])}, ${interp(rightStart[2], rightEnd[2])})`;

    // Subtle background variation instead of major color changes
    document.body.style.backgroundImage = `
        radial-gradient(circle at 20% ${50 + progress * 20}%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 80% ${30 + progress * 40}%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
        linear-gradient(180deg, ${leftColor} 0%, ${rightColor} 100%)
    `;
  });
});







