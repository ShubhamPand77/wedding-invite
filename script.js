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