const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

function validate() {
	// trim to remove the whitespaces
	
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	var alpha= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	var space =/[\s]+/;

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
        return false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
        return false;
	} else {
		setSuccessFor(email);
        console.log('Bingo1');
        if(passwordValue != '')
		 	{
            if(passwordValue.length <8) {
                setErrorFor(password, 'Atleast 8 characters are required');
                return false;
            }   else if (password.value.match(space)) 
            {
                setErrorFor(password, 'Remove spaces');
                return false;
            } 
            else if(passwordValue.match(alpha)) 
	        {
                setSuccessFor(password);
                console.log('Bingo2');
                return true;
	        } 
            else {
                setErrorFor(password, 'Please add atleast one special characters and use numbers, uppercase and lowercase.');
				return false;
                
            }
            
        } 
        else{
            setErrorFor(password, 'Re-enter correct password. Password cannot be blank');
            return false;
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

// Toggle Effect

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
