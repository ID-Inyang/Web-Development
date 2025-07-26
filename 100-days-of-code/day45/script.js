let dummyText = document.getElementById("p");
console.log(dummyText);

let button = document.getElementById("btn");
console.log(button);

let input = document.getElementById("inputId");

let myname = input.value;
console.log(myname);

funct

button.addEventListener("click", function () {
    dummyText.innerText = "This has been replaced by the real content";
})