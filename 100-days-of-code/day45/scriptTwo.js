let textArea = document.getElementById("textArea");

let inputID = document.getElementById("inputID");

let p = document.getElementById

inputID.addEventListener("input", function () {
    textArea.innerText = inputID.value;
})