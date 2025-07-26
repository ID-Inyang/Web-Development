let textArea = document.getElementById("textArea");

let inputID = document.getElementById("inputID");

let p = document.getElementById("p");

inputID.addEventListener("input", function () {
    textArea.innerText = inputID.value;

    let count = inputID.value.length;
    p.innerText = count;

    if (count >= 25) {
        alert("You can only type a maximum of 25 characters!")
    }
})

let myDiv = document.getElementById("myDiv");
let toggleBtn = document.getElementById("toogleBtn");

toggleBtn.addEventListener("click", function () {
    if (myDiv.style)
})
