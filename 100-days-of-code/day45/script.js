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

let divBlock = document.getElementById