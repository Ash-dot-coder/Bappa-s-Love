var timeL = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        // markers: true,
        start: "50% 50%",
        // end: "150% 50%", //if you wanna scroll more then remove end part
        scrub: 1.6,
        pin: true
    }
});
timeL.
    // to("#center", {
    //     height: "100vh",
    // }, 'together')
    to('#top', {
        top: "-50%"
    }, 'together')
    .to('#bottom', {
        bottom: "-50%"
    }, 'together')
    .to('#top-h1', {
        top: "70%"
    }, 'together')
    .to('#bottom-h1', {
        bottom: "-80%"
    }, 'together')
    .to("#center", {
        top: "-80%"
    }, 'together')
    .to('.content', {
        // delay: 0.012,
        // marginTop: "-74%"
        marginTop: "-80%"
    }, 'together')