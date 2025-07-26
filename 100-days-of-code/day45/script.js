let dummyText = document.getElementById("p");
console.log(dummyText);

let button = document.getElementById("btn");
console.log(button);

let input = document.getElementById("inputId");



function showDialog() {
    let myname = input.value;
    console.log(myname);
    dummyText.innerText = "This has been replaced by the real content";
}

button.addEventListener("click", showDialog);
})