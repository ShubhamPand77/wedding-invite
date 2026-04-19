document.getElementById("openBtn").addEventListener("click", function () {

  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const entry = document.getElementById("entry");
  const main = document.getElementById("main");
  const text = document.querySelector(".main h2");
  const items = document.querySelectorAll(".text > *");
setTimeout(() => {
  entry.style.display = "none";
  main.style.display = "flex";

  main.style.opacity = "1";
  main.style.transform = "scale(1)";

  // 🔥 STAGGER ANIMATION
  items.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, i * 1); // delay gap
  });
  const music = document.getElementById("bg-music");

// start music
music.volume = 0;
music.play();

// smooth fade-in
let vol = 0;
const fade = setInterval(() => {
  if (vol < 0.5) {
    vol += 0.05;
    music.volume = vol;
  } else {
    clearInterval(fade);
  }
}, 200);

}, 1000);
  // 🚪 Doors open (simple CSS — reliable)
  left.style.transform = "translateX(-100%)";
  right.style.transform = "translateX(100%)";

  // ✨ Main show
  setTimeout(() => {
    entry.style.display = "none";
    main.style.display = "flex";

    // 🎬 animation AFTER visible
    main.style.opacity = "1";
    main.style.transform = "scale(1)";

    const text = document.querySelector(".main h2");
    text.style.opacity = "1";
    text.style.transform = "translateY(0)";
  }, 1000);

});