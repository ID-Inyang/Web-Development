let myTitle = window.document.getElementById("title");
myTitle.innerText = "This is the DOM heading";

console.log(myTitle);

let paragraphClass = document.getElementsByClassName("paragraph");
console.log(paragraphClass[0]);

paragraphClass[0].textContent = "This paragraph has been changed by the DOM";
paragraphClass[0].style.color = 'lightblue';

let input = document.getElementById("inputId");
input.value = 'Enter your name';

let buttonTag = document.getElementsByTagName("button");
buttonTag.innerText = "DOM button update"

function showAlert(){
    alert("Welcome to UpSkill " + userName);
}