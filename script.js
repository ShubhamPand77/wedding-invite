const overlay = document.getElementById("overlay");
const content = document.getElementById("content");
const music = document.getElementById("bg-music");

overlay.addEventListener("click", () => {
  overlay.style.opacity = "0";

  setTimeout(() => {
    overlay.style.display = "none";
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
  }, 1200);

  // 🎵 Smooth music fade-in
  music.volume = 0;
  music.play();

  let vol = 0;
  let fade = setInterval(() => {
    if (vol < 0.5) {
      vol += 0.05;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);

}, { once: true });