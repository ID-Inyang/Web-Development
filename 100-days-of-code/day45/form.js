let myForm = document.getElementById("myform");
let emailText = document.getElementById("emailText");

myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    emailFromuser = emailText.value;

    if (emailFromuser.includes("@")) {
        alert("The Email is Valid");
    }
    else {
        alert("The Email is not valid");
    }
})

let textAreaId = document.getElementById("textArea")