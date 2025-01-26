
import './patologie.css'

import gsap from 'gsap'

let tl = gsap.timeline()

tl.from('.title', {opacity: 0, scale:1.5, duration:1});
tl.from('.mySwiper', {opacity: 0, scale:1.5, duration:1});
tl.from('.mySwiper2', {opacity: 0, scale:1.5, duration:1});