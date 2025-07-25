let myTitle = window.document.getElementById("title");
myTitle.innerText = "This is the DOM heading";

console.log(myTitle);

let paragraphClass = document.getElementsByClassName("paragraph");
console.log(paragraphClass[0]);

paragraphClass[0].textContent = "This paragraph has been changed by the DOM";
paragraphClass[0].style.color = 'lightblue';

let inputID = window.document.getElementById("inputId");
console.log(inputID);
inputID.placeholder = 'Enter your name';



function showAlert(userName){
    alert("Welcome to UpSkill " + userName);
}
let buttonTag = document.getElementsByTagName("button");
buttonTag[0].innerText = "DOM button update";
buttonTag[0].onclick = showAlert(inputID.value);