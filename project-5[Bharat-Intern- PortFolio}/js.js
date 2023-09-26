const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
document.addEventListener('mousemove', handleMouseMovement);

let circleX = 0;
let circleY = 0;

function updateCirclePosition(x, y) {
    gsap.to("#Minicircle", {
        x: x,
        y: y,
        duration: 0.3,
        ease: "power2.out"
    });
}

function handleMouseMovement(event) {
    const x = event.clientX;
    const y = event.clientY;
    const xOffset = -10;
    const yOffset = -10;

    circleX = x + xOffset;
    circleY = y + yOffset;

    updateCirclePosition(circleX, circleY);
}
gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
gsap.from(".changes",{
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.1,
    
}

)
