let dummyText = document.getElementById("p");
console.log(dummyText);

let button = document.getElementById("btn");
console.log(button);

let input = document.getElementById("inputId");

function showDialog() {
    let myname = input.value;
    console.log(myname);
    dummyText.innerText = "This has been replaced by the real content " + myname;
}

button.addEventListener("click", showDialog);

let divBlock = document.getElementById("myDiv");

divBlock.addEventListener("mouseover", function () {
    divBlock.style.backgroundColor = "lightgreen"
})

divBlock.addEventListener("mouseout", function () {
    divBlock.style.backgroundColor = "lightblue"
})