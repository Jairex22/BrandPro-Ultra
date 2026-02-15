// Hero Animación
anime.timeline({loop:false})
.add({
    targets: '.hero-title',
    translateY: [-50,0],
    opacity:[0,1],
    rotateX: [10,0],
    easing: 'easeOutExpo',
    duration: 1500
})
.add({
    targets: '.hero-subtitle',
    translateY: [-30,0],
    opacity:[0,1],
    easing: 'easeOutExpo',
    duration: 1200
}, '-=1000')
.add({
    targets: '.hero-btn',
    scale: [0.7,1],
    opacity:[0,1],
    easing: 'easeOutElastic(1, .8)',
    duration: 1300
});

// Cards scroll animation
const cards = document.querySelectorAll('.service-3d');
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            anime({
                targets: entry.target,
                translateY:[50,0],
                rotateY:[15,0],
                opacity:[0,1],
                duration: 1200,
                easing: 'easeOutExpo'
            });
            observer.unobserve(entry.target);
        }
    });
},{threshold:0.3});
cards.forEach(card => observer.observe(card));

// Microinteracciones botones
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn=>{
    btn.addEventListener('mouseenter', ()=> {
        anime({
            targets: btn,
            scale: 1.05,
            duration: 300,
            easing: 'easeOutSine'
        });
    });
    btn.addEventListener('mouseleave', ()=> {
        anime({
            targets: btn,
            scale: 1,
            duration: 300,
            easing: 'easeOutSine'
        });
    });
});
