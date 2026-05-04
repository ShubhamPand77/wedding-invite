openBtn.addEventListener("click", () => {

  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const entry = document.getElementById("entry");
  const main = document.getElementById("main");
  const music = document.getElementById("bg-music");

  const particleContainer = openBtn.querySelector(".particles");

  // 💥 PARTICLE BURST
  for (let i = 0; i < 40; i++) {
    const dot = document.createElement("span");

    dot.style.left = "50%";
    dot.style.top = "50%";

    const angle = Math.random() * 360;
    const distance = Math.random() * 150;

    dot.style.setProperty("--x", Math.cos(angle) * distance + "px");
    dot.style.setProperty("--y", Math.sin(angle) * distance + "px");

    particleContainer.appendChild(dot);

    setTimeout(() => dot.remove(), 1000);
  }

  // 🚪 DOOR OPEN
  left.style.transform = "translateX(-100%)";
  right.style.transform = "translateX(100%)";

  // 🎵 MUSIC
  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.5) {
      vol += 0.05;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);

  // ✨ SHOW MAIN
  setTimeout(() => {
    entry.style.display = "none";
    main.style.display = "flex";

    setTimeout(() => {
      main.style.opacity = "1";
    }, 100);

  }, 1500);
});