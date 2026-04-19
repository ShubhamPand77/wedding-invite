const entry = document.getElementById("entry");
const leftDoor = document.querySelector(".left");
const rightDoor = document.querySelector(".right");
const btn = document.getElementById("openBtn");
const music = document.getElementById("bg-music");
const main = document.getElementById("main");

// Safety check (important)
if (!entry || !leftDoor || !rightDoor || !btn || !music || !main) {
  console.error("Element not found! Check IDs and classes.");
}

// Entry text animation
gsap.from(".entry-inner h1", {
  opacity: 0,
  y: -20,
  duration: 1.5,
  ease: "power3.out"
});

gsap.from("#openBtn", {
  opacity: 0,
  y: 20,
  delay: 0.8,
  duration: 1,
  ease: "power3.out"
});

// Button click
btn.addEventListener("click", () => {

  // 🚪 Door animation
  gsap.to(leftDoor, {
    x: "-100%",
    duration: 1.5,
    ease: "power3.inOut"
  });

  gsap.to(rightDoor, {
    x: "100%",
    duration: 1.5,
    ease: "power3.inOut"
  });

  // ✨ Show main content
  gsap.to(main, {
    opacity: 1,
    duration: 1,
    delay: 1
  });

  // ❌ Hide entry
  gsap.to(entry, {
    opacity: 0,
    delay: 1,
    duration: 1,
    onComplete: () => {
      entry.style.display = "none";
    }
  });

  // 🎵 Music start with fade
  music.volume = 0;
  music.play();

  gsap.to(music, {
    volume: 0.5,
    duration: 2
  });

}, { once: true });