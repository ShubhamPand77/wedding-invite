document.getElementById("openBtn").addEventListener("click", function () {

  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const entry = document.getElementById("entry");
  const main = document.getElementById("main");
  const music = document.getElementById("bg-music");

  console.log("GATE OPEN");

  // 🚪 Split animation
  left.style.transform = "translateX(-100%)";
  right.style.transform = "translateX(100%)";

  // 🎵 music start
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

  // ✨ show main after gate opens
  setTimeout(() => {
    entry.style.display = "none";
    main.style.display = "flex";

    setTimeout(() => {
      main.style.opacity = "1";
    }, 100);

  }, 1500);

});
const container = document.querySelector(".particles");

for (let i = 0; i < 30; i++) {
  const dot = document.createElement("span");

  dot.style.left = Math.random() * 100 + "%";
  dot.style.animationDuration = (6 + Math.random() * 6) + "s";
  dot.style.width = dot.style.height = (2 + Math.random() * 4) + "px";

  container.appendChild(dot);
}
.burst {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9;
}

.burst span {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #d4af37;
  border-radius: 50%;
  opacity: 1;
}
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});