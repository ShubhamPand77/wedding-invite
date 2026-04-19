const overlay = document.getElementById("overlay");
const content = document.getElementById("content");
const music = document.getElementById("bg-music");

overlay.addEventListener("click", () => {
  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 1000);

  content.style.opacity = "1";

  music.play();
}, { once: true });