const entry = document.getElementById("entry");
const music = document.getElementById("bg-music");

// TEXT ENTRY ANIMATION
gsap.to(".entry-inner h1", {
  opacity: 1,
  y: -10,
  duration: 1.5,
  ease: "power3.out"
});

gsap.to(".entry-inner p", {
  opacity: 1,
  y: 10,
  duration: 1.5,
  delay: 0.5,
  ease: "power3.out"
});

// CLICK EVENT
entry.addEventListener("click", () => {

  gsap.to(entry, {
    opacity: 0,
    duration: 1.2,
    ease: "power3.inOut",
    onComplete: () => entry.style.display = "none"
  });

  // MUSIC
  music.volume = 0;
  music.play();

  gsap.to(music, {
    volume: 0.5,
    duration: 2
  });

}, { once: true });