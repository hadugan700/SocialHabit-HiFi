let picModal = document.getElementById("pic-modal");
let friendBtn = document.getElementById("new-profile-pic-btn");

friendBtn.onclick = function() {
    picModal.style.display = "block";
}

document.onclick = function(event) {
    if (event.target == picModal) {
        picModal.style.display = "none";
    }
    if (event.target == menuModal) {
        menuModal.style.display = "none";
    }
} 

let createBtn = document.getElementById("pic-save-btn");
let form = document.getElementById('pic-form');

createBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let inputPic = document.getElementById("pic-input").files[0]

    let pic = document.getElementById("profile-img")
    pic.src = `./images/${inputPic.name}`

    picModal.style.display = "none";
})
