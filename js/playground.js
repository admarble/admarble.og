var tl = gsap.timeline({defaults:{duration: 1, ease: "circ.out", opacity: 0, autoAlpha: 0}})
tl.to("#loading-screen", {immediateRender: true, smoothOrigin:true, delay: 1, duration: 1})
.from(".carousel", {immediateRender: true, smoothOrigin:true, duration: 1, y: 150, stagger: 0.2})
.from(".branding", {immediateRender: true, smoothOrigin:true, duration: 3, scale: 1.2},"-=1.2")