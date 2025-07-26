let textArea = document.getElementById("textArea");

let inputID = document.getElementById("inputID");

let p = document.getElementById("p");

inputID.addEventListener("input", function () {
    textArea.innerText = inputID.value;

    let count = inputID.value.length;
    p.innerText = count;

    if (count >= 20) {
        alert
    }
})