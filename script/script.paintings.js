gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

//If the devide user uses does not equal to the touch device we use the smooth scroller
if(ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })
        // Animates the start of the page adding the fading effect using gsap
        gsap.fromTo('.dragon_section', { opacity: 1}, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.dragon_section',
                start: 'center',
                end: '900',
                scrub: true
            }
        })

        
    // Creates fading out items
    let itemsL = gsap.utils.toArray('.painting__item')

    // Cycle that triggers items to fade out and in one by each rather than all together
    itemsL.forEach( item => {
        gsap.fromTo(item, { x: -550, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-750',
                end: '-50',
                scrub: true
            }
        })
    })
}