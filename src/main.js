// Import our custom CSS
import './style.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import jQuery from 'jquery';
var $ = jQuery


import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
let hamburger = document.querySelector('#nav-icon');
let open = false

gsap.registerPlugin(ScrollTrigger)
hamburger.addEventListener('click', (event) => {
    if (open) {
        gsap.to('nav', {x: '0vw', duration:1});
        open = false;
    } else {
        gsap.to('nav', {x: '-100vw', duration:1});
        open = true;
    }
    hamburger.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", (event) => {

    let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.section1',
                pin: true, // pin the trigger element while active
                start: 'bottom bottom', // when the top of the trigger hits the top of the viewport
                end: window.innerHeight + 'px', // end after scrolling 500px beyond the start
                scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                pinSpacing: false,
            },
        }
    );

    tl1.to('.logo', {scale: 1.5, opacity: 0, duration: 3})
    tl1.to('.logo-text', {scale: 1.5, opacity: 0, duration: 3})
    tl1.to('.doc-image', {scale: 2, opacity: 0, duration: 3})
    tl1.to('body', {duration: 4})


    let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.section2',
                pin: true, // pin the trigger element while active
                start: 'top top', // when the top of the trigger hits the top of the viewport
                end: '+=' + window.innerHeight + 'px', // end after scrolling 500px beyond the start
                scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                pinSpacing: false,
            },
        }
    );

    tl2.to('body', {duration: 5})
    tl2.fromTo('.title', {opacity: 0, scale: 1.5, y: 200}, {opacity: 1, y: 0, scale: 1, duration: 5})
    tl2.fromTo('.parag-1', {opacity: 0, scale: 1.5, y: 200}, {opacity: 1, y: 0, scale: 1, duration: 5})
    tl2.fromTo('.parag-2', {opacity: 0, scale: 1.5, y: 200}, {opacity: 1, y: 0, scale: 1, duration: 5})
    tl2.fromTo('.cit', {opacity: 0, scale: 1.5, y: 200}, {opacity: 1, y: 0, scale: 1, duration: 5})
    tl2.to('body', {duration: 5})
    tl2.to('.section2', {opacity: 0, duration:5})

    let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '.section3',
                pin: true, // pin the trigger element while active
                start: 'top top', // when the top of the trigger hits the top of the viewport
                end: '+=' + window.innerHeight + 'px', // end after scrolling 500px beyond the start
                scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                pinSpacing: false,
            },
        }
    );

    tl3.to('body', {duration: 5})
    tl3.fromTo('.bg-sky', {opacity: 0, scale: 1.3}, {opacity: 1, scale:1, backgroundImage: 'url(images/sky.jpg)', duration: 5})
    tl3.fromTo('.title3', {opacity: 0, scale: 1.5, y: 200}, {opacity: 1, y: 0, scale: 1, duration: 5})
    tl3.fromTo('.parag-3', {opacity: 0, scale: 1.5, y: 200}, {opacity: 1, y: 0, scale: 1, duration: 5})
    tl3.to('body', {duration: 5})
    tl3.to('.section3', {opacity: 0, scale: 1.2, duration:5})
    tl3.to('body', {duration: 4})

    let tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: '.section4',
                pin: true, // pin the trigger element while active
                start: 'top top', // when the top of the trigger hits the top of the viewport
                end: '+=' + window.innerHeight + 'px', // end after scrolling 500px beyond the start
                scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                pinSpacing: false,
            },
        }
    );

    tl4.to('body', {duration: 5})
    tl4.fromTo('.title4', {opacity: 0, scale: 1.5, y: 200}, {opacity: 1, y: 0, scale: 1, duration: 5})
    tl4.fromTo('.parag-4', {opacity: 0, scale: 1.5, y: 200}, {opacity: 1, y: 0, scale: 1, duration: 5})
    tl4.to('body', {duration: 5})
    tl4.to('.section4', {opacity: 0, scale: 1.2, duration:5})

    let tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: '.section5',
                pin: true, // pin the trigger element while active
                start: 'top top', // when the top of the trigger hits the top of the viewport
                end: '+=' + window.innerHeight + 'px', // end after scrolling 500px beyond the start
                scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                pinSpacing: false,
            },
        }
    );

    tl5.to('body', {duration: 5})
    tl5.fromTo('.title5', {opacity: 0, scale: 1.5, y: 200}, {opacity: 1, y: 0, scale: 1, duration: 5})
    tl5.fromTo('.parag-5', {opacity: 0, scale: 1.5, y: 200}, {opacity: 1, y: 0, scale: 1, duration: 5})
    tl5.to('body', {duration: 5})

    let tl6 = gsap.timeline({
            scrollTrigger: {
                trigger: '.section6',
                pin: true, // pin the trigger element while active
                start: 'top top', // when the top of the trigger hits the top of the viewport
                end: '+=' + window.innerHeight + 'px', // end after scrolling 500px beyond the start
                scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            },
        }
    );

    tl6.to('body', {duration: 5})
    tl6.fromTo('.title6', {opacity: 0, scale: 1.5, y: 200}, {opacity: 1, y: 0, scale: 1, duration: 5})
    tl6.fromTo('.parag-6', {opacity: 0, scale: 1.5, y: 200}, {opacity: 1, y: 0, scale: 1, duration: 5})


    
});