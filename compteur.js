let value = 0;

function comptage() {
  value++;
  document.getElementById("value").textContent = value;
  if (value > 5) {
    document.getElementById("value").textContent = "stop"
  } else if (value > 0) {
    document.getElementById("imgCortex").width *= 1.1;
  }
}

document.getElementById("btnCount").addEventListener("click", comptage);





