// gsap.from(".am-profile", {immediateRender: true, smoothOrigin:true, keyframes:[{opacity: 0, duration:1},{y: 150, duration: 2}], ease: "circ.out"});
// gsap.from(".am-profile", {immediateRender: true, smoothOrigin:true, opacity: 0, duration:4, y: 150, duration:2, ease: "circ.out"});

// gsap.from(".branding", {immediateRender: true, smoothOrigin:true, duration: 1, scale: 1.2, ease: "circ.out"});

var tl = gsap.timeline({defaults:{ease: "circ.out", opacity: 0, autoAlpha: 0}})
tl.from(".am-profile", {immediateRender: true, smoothOrigin:true, opacity: 0, duration:4, y: 150, duration:2, ease: "circ.out"})
.from(".branding", {immediateRender: true, smoothOrigin:true, duration: 3, scale: 1.2, ease: "circ.out"},"-=1.2")

// document.getElementById('cta').addEventListener('click',() => {
//     tl.reversed() ? tl.play() : tl.reverse()
// });

// document.getElementById('cta').addEventListener('click', (e) => {
//     console.log('click');
//     e.preventDefault();
//     tl.reversed() ? tl.play() : tl.reverse(1);
// });

let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".about-image", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -200);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".about-image", {transformOrigin: "center", force3D: true});
