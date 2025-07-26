let textArea = document.getElementById("textArea");

let inputID = document.getElementById("inputID");

inputID.addEventListener("input", function () {
    textArea.innerText = inputID.value;
})