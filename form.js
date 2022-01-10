let email = document.getElementById("email");
let pwd = document.getElementById("pwd");

function validate(){
    if (email.value==""||pwd.value=="")
    {
        alert("Fields can not be Empty");
        return false;
    }
    else{
           return true;
    }
}

let email1 = document.getElementById("email1");
let pwd1 = document.getElementById("pwd1");
let pwd2 = document.getElementById("pwd2");

function validate2(){
    if (email1.value==""||pwd1.value==""||pwd2.value=="")
    {
        alert("Fields can not be Empty");
        return false;
    }
    else if(pwd1.value!=pwd2.value){
        alert("Password does not match. Please re-enter the correct password.")
           return false;
    }
    else{
        return true;
    }
}