let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let email1 = document.getElementById("email1");
let pwd1 = document.getElementById("pwd1");
let pwd2 = document.getElementById("pwd2");

function validate(){
    if (email.value==""||pwd.value==""||email1.value==""||pwd1.value==""||pwd2.value=="")
    {
        alert("Fields can not be Empty");
        return false;
    }
    
    else if(pwd1.value!=pwd2.value){
        alert("Password does not match. Please re-enter the correct password.");
        pwd2.style.border ="2px solid red";
           return false;

    }
    else if(pwd.value.length<=5 ){
            alert("Password is too short");
            pwd.style.border ="2px solid red";
            return false;
    }
    else if((pwd1.value.length<=5) || (pwd2.value.length<=5) ){
        alert("Password is too short");
            pwd2.style.border ="2px solid red";
            return false;
    }
    else {
        return true;
    }
}