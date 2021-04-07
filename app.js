/*----- cached element references -----*/

const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const introText = document.querySelector('.intro-text')

// const title = section.querySelector('h1');


const tl = new TimelineMax();

/*----- event listeners -----*/


// window.addEventListener('scroll', scrollAppear)


/*----- functions -----*/

new fullpage('#fullpage', {
    autoSrcolling: true,
    navigation: true,

    //animate  section h1
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector('h1');
        tl.fromTo(title, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 });
        const screenshots = document.querySelectorAll('.screenshot');
        const description = document.querySelector('p');
        tl.fromTo(screenshots, 0.7, { x: '100%' }, { x: '-10%' })
        tl.fromTo(introText, 1.2, { opacity: 0 }, {opacity: 1 }, "-=1.2")
    }
})

tl.fromTo(hero, 1, { height: '0%' }, { height: '80%', ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: '100%' }, { width: '80%', ease: Power2.easeInOut })
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(logo, 1.2, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=1.2")
    
// function scrollAppear() {
//     const introText = document.querySelector('.intro-text');
    
//     introText.classList.add('.intro-appear')
// }

