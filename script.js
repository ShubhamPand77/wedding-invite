document.getElementById("openBtn").addEventListener("click", function () {

  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const entry = document.getElementById("entry");
  const main = document.getElementById("main");

  // 🚪 Doors open
  gsap.to(left, {
    x: "-100%",
    duration: 1.5,
    ease: "power3.inOut"
  });

  gsap.to(right, {
    x: "100%",
    duration: 1.5,
    ease: "power3.inOut"
  });

  // ✨ Main reveal (zoom + fade)
  gsap.to(main, {
    opacity: 1,
    scale: 1,
    duration: 1.5,
    delay: 1
  });

  // 🎬 Text animation (stagger feel)
  gsap.to(".main h2", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    delay: 1.5,
    ease: "power3.out"
  });

  // ❌ Hide entry
  gsap.to(entry, {
    opacity: 0,
    delay: 1,
    duration: 1,
    onComplete: () => entry.style.display = "none"
  });

});