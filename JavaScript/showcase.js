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