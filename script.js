const entry = document.getElementById("entry");
const main = document.getElementById("main");
const music = document.getElementById("bg-music");

entry.addEventListener("click", () => {

  // ENTRY animation
  gsap.to(entry, {
    opacity: 0,
    scale: 1.2,
    duration: 1.2,
    ease: "power3.out",
    onComplete: () => entry.style.display = "none"
  });

  // MAIN fade
  gsap.to(main, {
    opacity: 1,
    duration: 1.5,
    delay: 0.5
  });

  // TEXT animation
  gsap.from(".card > *", {
    y: 40,
    opacity: 0,
    stagger: 0.2,
    duration: 1.2,
    delay: 0.8,
    ease: "power3.out"
  });

  // MUSIC fade-in
  music.volume = 0;
  music.play();

  gsap.to(music, {
    volume: 0.5,
    duration: 2
  });

}, { once: true });