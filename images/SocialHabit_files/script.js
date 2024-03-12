var menuModal = document.getElementById("menu-modal");
var menuBtn = document.getElementById("menu-btn");

menuBtn.onclick = function() {
  menuModal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == menuModal) {
    menuModal.style.display = "none";
  }
} 