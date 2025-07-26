let dummyText = document.getElementById("p");
console.log(dummyText);


let button = document.getElementById("btn");
console.log(button);
// dummyText.innerText = ;

button.addEventListener("click", function () {
    dummyText.innerText = "This has been replaced by the real content"
})