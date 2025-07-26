let textArea = document.getElementById("textArea");

let inputID = document.getElementById("inputId");

inputID.addEventListener("input", function () {
    textArea.innerHTML = inputID.ariaValueMax;
})