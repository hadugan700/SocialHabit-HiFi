var modal = document.getElementById("menu-modal");

var btn = document.getElementById("menu-btn");

btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 