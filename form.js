const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phone = document.getElementById('phone');

form.addEventListener('submit', e => {
	e.preventDefault();
	if(checkInputs()){
		e.currentTarget.submit();
	}
	});
	// 

function checkInputs() {
	// trim to remove the whitespaces
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const phoneValue = phone.value.trim();
	
	var alpha= /^[A-Za-z]+$/;
	var nonalpha = /[\W\s]+/;
	var space =/[\s]+/;
	if(firstnameValue === '' || (firstnameValue.length<=2)) 
	{
		setErrorFor(firstname, 'Enter a value more than 2 alphabets');
	}
	
	else if (firstnameValue.length>20) 
	{
		setErrorFor(firstname, 'Firstname less than 20 alphabets');
	}
	else if(firstname.value.match(alpha)) 
	{
		setSuccessFor(firstname);
	} 
	else if(firstname.value.match(nonalpha)) 
	{
		setErrorFor(firstname, 'Remove special characters');
	} 
	
	else {
		setErrorFor(firstname, 'Enter only Alphabets');
	}

	if(lastnameValue === '' || (lastnameValue.length<=2)){
		setErrorFor(lastname, 'Enter a value more than 2 alphabets');
	}  
	
	else if (lastnameValue.length>20) 
	{
		setErrorFor(lastname, 'Lastname less than 20 alphabets');
	}
	else if(lastname.value.match(alpha)) 
	{
		setSuccessFor(lastname);
	} 
	else if(lastname.value.match(nonalpha)) 
	{
		setErrorFor(lastname, 'Remove special characters');
	} 
	else {
		setErrorFor(lastname, 'Enter only Alphabets');
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	

	if(phoneValue === '') {
		setErrorFor(phone, 'Phone Number cannot be blank');
	} 
	else if (phoneValue.length!=12) {
		setErrorFor(phone, 'Invalid,enter 10 digits');
	} else  {
		setSuccessFor(phone);
	}
	

	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	}
	else if(password.value.match(space)) 
	{
		setErrorFor(password, 'Remove spaces');
	} else if(passwordValue !=8) {
		setErrorFor(password, 'Atleast 8 characters are required');
	} 
	 else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Re-enter correct password. Password cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Password does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) 
{
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



// Password strength

function getPasswordStrength(password){
	let s = 0;
	if(password.length > 6){
	  s++;
	}
	if(password.length > 8){
	  s++;
	}
	if(/[A-Z]/.test(password)){
	  s++;
	}
	if(/[0-9]/.test(password)){
	  s++;
	}
	if(/[^A-Za-z0-9]/.test(password)){
	  s++;
	}
	return s;
  }
  document.querySelector(".form-control #password").addEventListener("focus",function(){
	document.querySelector(".form-control .pw-strength").style.display = "block";
  });


  document.querySelector(".form-control .pw-display-toggle-btn").addEventListener("click",function(){
	let el = document.querySelector(".form-control .pw-display-toggle-btn");
	if(el.classList.contains("active")){
	  document.querySelector(".form-control #password").setAttribute("type","password");
	  el.classList.remove("active");
	} else {
	  document.querySelector(".form-control #password").setAttribute("type","text");
	  el.classList.add("active");
	}
  });
  
  
  document.querySelector(".form-control #password").addEventListener("keyup",function(e){
	let password = e.target.value;
	let strength = getPasswordStrength(password);
	let passwordStrengthSpans = document.querySelectorAll(".form-control .pw-strength span");
	strength = Math.max(strength,1);
	passwordStrengthSpans[1].style.width = strength*20 + "%";
	if(strength < 2){
	  passwordStrengthSpans[0].innerText = "Weak";
	  passwordStrengthSpans[0].style.color = "#111";
	  passwordStrengthSpans[1].style.background = "#d13636";
	} else if(strength >= 2 && strength <= 4){
	  passwordStrengthSpans[0].innerText = "Medium";
	  passwordStrengthSpans[0].style.color = "#111";
	  passwordStrengthSpans[1].style.background = "#e6da44";
	} else {
	  passwordStrengthSpans[0].innerText = "Strong";
	  passwordStrengthSpans[0].style.color = "#fff";
	  passwordStrengthSpans[1].style.background = "#20a820";
	}
  });