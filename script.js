const scroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
})

let play = document.querySelector(".play");
let video = document.querySelector("#vdo-container");
let shop = document.querySelector("#shop");
// let logo = document.querySelectorAll(".logo h1");

function playbtnvisi(){
    video.addEventListener("mouseenter", function(){
        gsap.to(play, {
            zIndex: 999,
            opacity: 1,
            scale: 1,
        });
    });
    video.addEventListener("mouseleave", function(){
        gsap.to(play, {
            opacity: 0,
            scale: 0,
        });
    });
};
function playbtnmove(){
    video.addEventListener("mousemove", function(dets){

        gsap.to(play, {
            top: dets.y,
            left: dets.x,
            transform: `translate(-50%, -50%)`,
        })
    })
}
function loadingAni(){
    gsap.from("nav", {
        y: -30,
        opacity: 0,
        delay: 0.5,
        duration: 0.4,
    });
    gsap.from(".change", {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 0.4,
    });
    gsap.from(".the", {
        y: 30,
        opacity: 0,
        delay: 0.7,
        duration: 0.4,
    });
    gsap.from(".course", {
        y: 30,
        opacity: 0,
        delay: 0.9,
        duration: 0.4,
    });
    gsap.from("video", {
        y: -30,
        opacity: 0,
        delay: 1.1,
        duration: 0.5,
    });
    gsap.from("#book", {
        x: -30,
        opacity: 0,
        delay: 1.1,
        duration: 0.5,
    });
};

// shop.addEventListener("mouseenter", function(){
    
// })


// window.addEventListener("mousemove", function(dets){
//     gsap.to("#cir", {
//         top: dets.y,
//         left: dets.x,
//     })

// })


loadingAni();
playbtnvisi();
playbtnmove();