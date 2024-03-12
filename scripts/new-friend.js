let friendModal = document.getElementById("friend-modal");
let friendBtn = document.getElementById("friend-btn");

friendBtn.onclick = function() {
    friendModal.style.display = "block";
}

document.onclick = function(event) {
    if (event.target == friendModal) {
        friendModal.style.display = "none";
    }
} 

let createBtn = document.getElementById("add-friend-btn");
let form = document.getElementById('friend-form');

createBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    // let jsonData = JSON.stringify(data);
    // console.log(jsonData);

    // window.localStorage.setItem('task', jsonData);
    // console.log(window.localStorage.getItem('task'));

    let friend = document.createElement("div");
    friend.classList.add("friend-container");
    friend.innerHTML = `
    <div class="friend-pic">
        <img src="../images/profile2.png" alt="friend-pic">
    </div>
    <div class="friend-details">
        <div class="friend-name">${data["friend-name"]}</div>
        <div class="friend-level">Level 15</div>
        <div class="friend-level-bar">
            <img src="../images/friend-level16-bar.png" alt="friend-lebel16-bar">
        </div>
    </div>`;

    let container = document.getElementById("friends-container");
    container.innerHTML += friend.outerHTML;

    friendModal.style.display = "none";
})
