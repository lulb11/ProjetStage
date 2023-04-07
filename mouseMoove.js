const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.top = e.pageY + "px";
  mousemove.style.left = e.pageX + "px";
});

