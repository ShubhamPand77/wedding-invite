const entry = document.getElementById("entry");
const leftDoor = document.querySelector(".left");
const rightDoor = document.querySelector(".right");
const btn = document.getElementById("openBtn");
const music = document.getElementById("bg-music");

// Entry text animation
gsap.to(".entry-inner h1", {
  opacity: 1,
  y: -10,
  duration: 1.5
});
const main = document.getElementById("main");

gsap.from("#openBtn", {
  opacity: 0,
  y: 20,
  delay: 0.8,
  duration: 1
});

// Button click
btn.addEventListener("click", () => {

  // DOOR OPEN ANIMATION
  gsap.to(leftDoor, {
    x: "-100%",
    duration: 1.5,
    ease: "power3.inOut"
  });
gsap.to(main, {
  opacity: 1,
  duration: 1,
  delay: 1.2
});
  gsap.to(rightDoor, {
    x: "100%",
    duration: 1.5,
    ease: "power3.inOut"
  });

  // Fade out entry
  gsap.to(entry, {
    opacity: 0,
    delay: 1,
    duration: 1,
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