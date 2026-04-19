document.getElementById("openBtn").addEventListener("click", function () {

  console.log("CLICK WORKING");

  document.querySelector(".left").style.transform = "translateX(-100%)";
  document.querySelector(".right").style.transform = "translateX(100%)";

  setTimeout(() => {
    document.getElementById("entry").style.display = "none";
    document.getElementById("main").style.display = "block";
  }, 1000);

});