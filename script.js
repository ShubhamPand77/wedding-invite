const btn = document.getElementById("openBtn");

btn.addEventListener("click", () => {

  document.querySelector(".left").style.transform = "translateX(-100%)";
  document.querySelector(".right").style.transform = "translateX(100%)";

  document.getElementById("bg-music").play();

  setTimeout(() => {
    document.getElementById("entry").style.display = "none";
    document.getElementById("main").style.display = "flex";
  }, 1500);

});

// simple particles
const container = document.querySelector(".particles");

for (let i = 0; i < 25; i++) {
  const dot = document.createElement("span");
  dot.style.left = Math.random() * 100 + "%";
  dot.style.animationDuration = (5 + Math.random() * 5) + "s";
  container.appendChild(dot);
}