import gsap from "gsap";

const pageTransitionConfig = {
  mode: "out-in",
  appear: true,
  css: false,
  onEnter(el, done) {
    gsap.to(el, {
      duration: 0.35, opacity: 1,
      onComplete: done
    });
  },
  onLeave(el, done) {
    gsap.to(el, {
      duration: 0.35, opacity: 0,
      onComplete: done
    });
  },
};

export default pageTransitionConfig;
