const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phone = document.getElementById('phone');


function validate() {
	// trim to remove the whitespaces
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const phoneValue = phone.value.trim();
	
	var alpha= /^[a-zA-Z]+/;
    var num = /[0-9]+/;
	var phn = /(^[7-9]\d{2}-\d{3}-\d{4})|(^[7-9]\d{2}.\d{3}.\d{4})|(^[7-9]\d{2}\s\d{3}\s\d{4})+/;
	var space =/[\s]+/;

    // First Name Validation

    if(firstnameValue === '' || (firstnameValue.length<=2)) 
	{
		setErrorFor(firstname, 'Firstname should be more than 2 alphabets');
		return false;
	}
	
	else if (firstnameValue.length>20) 
	{
		setErrorFor(firstname, 'Firstname should be less than 20 alphabets');
				return false;
	}
	else if(!firstnameValue.match(alpha))  
	{
			setErrorFor(firstname, 'Remove special characters');
					return false;
	} 
    else if(firstname.value.match(space))
	{
			setErrorFor(firstname, 'Remove Spaces');
					return false;
	} 
    else if(firstnameValue.match(num))
	{
			setErrorFor(firstname, 'Remove numbers');
					return false;
	} 
	
	else 
	{
		setSuccessFor(firstname);

                // Last Name Validation

				if(lastnameValue === '' || (lastnameValue.length<=2))
				{
				setErrorFor(lastname, 'Lastname should more than 2 alphabets');
						return false;

				}  
				
				else if (lastnameValue.length>20) 
				{
					setErrorFor(lastname, 'Lastname should be less than 20 alphabets');
							return false;
				}
				else if(!lastnameValue.match(alpha))
				{
					setErrorFor(lastname, 'Remove special characters');
							return false;

				} 
                else if(lastname.value.match(space)) 
				{
					setErrorFor(lastname, 'Remove spaces');
							return false;

				} 
                else if(lastnameValue.match(num))
				{
					setErrorFor(lastname, 'Remove numbers');
							return false;

				} 
				
				else 
				{
					setSuccessFor(lastname);

                    // Email Validation

					if(emailValue === '') 
					{
						setErrorFor(email, 'Email cannot be blank');
								return false;

					}
                    else if (email.value.match(space)) 
					{
						setErrorFor(email, 'Remove spaces');
								return false;

					}
                     else if (!isEmail(emailValue)) 
					{
						setErrorFor(email, 'Not a valid email');
								return false;

					}
                     else 
					{
						setSuccessFor(email);

                                    // Phone Number Validation

									if(phoneValue === '') 
									{
										setErrorFor(phone, 'Phone Number cannot be blank or enter only 10 digits');
												return false;

									} 
									else if (phoneValue.length!=12) 
									{
										setErrorFor(phone, 'Enter the phone in the given format');
												return false;

									} 
                                    else if(!phoneValue.match(phn)) 
                                    {
                                        setErrorFor(phone, 'Enter only Digits, phone number should start with 7,8 or 9 and enter in the given format');
                                                return false;

                                    } 
                                    else  
									{
										setSuccessFor(phone);

                                        // Password Validation

										if(passwordValue === '') 
										{
											setErrorFor(password, 'Password cannot be blank');
													return false;

										}
										else if(password.value.match(space)) 
										{
											setErrorFor(password, 'Remove spaces');
													return false;

										} 
                                        else if(passwordValue.length  <8) 
                                        {
											setErrorFor(password, 'Atleast 8 characters are required');
													return false;

										} 
										 else 
										{
											setSuccessFor(password);

                                            // Password Confirmation Validation

											if(password2Value === '') 
											{
												setErrorFor(password2, 'Re-enter correct password. Password cannot be blank');
														return false;

											} else if(passwordValue !== password2Value) 
											{
												setErrorFor(password2, 'Password does not match');
														return false;

											} else if(password2.value.match(space)) 
											{
												setErrorFor(password, 'Remove spaces');
														return false;

											} else if(password2Value.length <8) 
											{
												setErrorFor(password2, 'Atleast 8 characters are required');
														return false;

											}  
											else{
												setSuccessFor(password2);
                                                console.log("Bingo");
												return true;

											}
										}
									}
					}
				}
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
	return /^([\w\.-]+)@([\w\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/.test(email);
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
