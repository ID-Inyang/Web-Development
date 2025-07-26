let dummyText = document.getElementById("p");
console.log(dummyText);

let button = document.getElementById("btn");
console.log(button);

let input = document.getElementById("inputId");

let name = input.value;
console.log(myname);

button.addEventListener("click", function () {
    dummyText.innerText = "This has been replaced by the real content";
})