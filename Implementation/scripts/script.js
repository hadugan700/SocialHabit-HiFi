let menuModal = document.getElementById("menu-modal");
let menuModalCont = document.getElementsByClassName("modal-cont")[0]
let menuBtn = document.getElementById("menu-btn");

menuBtn.onclick = function() {
    menuModal.style.display = "block";
}

document.onclick = function(event) {
    if (event.target == menuModal) {
        menuModal.style.display = "none";
    }
} 

// Record mouse position and save to JSON
// Export JSON with downloadJson()
let mouseData = [];

function recordMousePos(event) {
  let currentTime = new Date().getTime().toLocaleString();
  let data = {
    x: event.clientX,
    y: event.clientY,
    time: currentTime
  };
  mouseData.push(data);
}

function downloadJson() {
  let jsonData = JSON.stringify(mouseData);
  let blob = new Blob([jsonData], { type: 'application/json' });
  let url = URL.createObjectURL(blob);

  let a = document.createElement('a');
  a.href = url;
  a.download = 'mouse_data.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

document.addEventListener("click", recordMousePos);
