//Validating user:
if((String(localStorage.permissions) !== '"Technician"') && (String(localStorage.permissions) !== '"Customer"'))
	{
	 alert("Access Denied!");
	 window.location.href = "error.html";
	}

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // prevent form submission
    handleSubmit(event); // pass the event object as a parameter
});

function handleSubmit(event) {
	
    const oldPassword = document.getElementById("Old-Password").value;
    const newPassword = document.getElementById("New-Password").value;
    const confirmNewPassword = document.getElementById("Confirm-Password").value;
	const delayTime = 5000;
  
    const currentPassword = localStorage.password; // replace with your actual current password
	
    if (oldPassword !== currentPassword) {
		document.getElementById("change-password-msg").innerHTML = "The old password is incorrect.";
		document.getElementById("change-password-msg").style.opacity = 1;
		
    } else if (newPassword !== confirmNewPassword) {
		document.getElementById("change-password-msg").innerHTML = "The new password does not match.";
		document.getElementById("change-password-msg").style.opacity = 1;
		
    } else {
	  
	  	let str = localStorage.username;
	  	str = str.replace(/"/g, ''); // Remove all quotation marks from the string
 
	  	callAPI(str, newPassword);
	  
	  	localStorage.password = newPassword;

		document.getElementById("change-password-msg").style.opacity = 0;
	  	document.getElementById("password-success-msg").innerHTML = "Password Change Successful.";
	  	document.getElementById("password-success-msg").style.opacity = 1;
		setTimeout(() => {location.reload();}, delayTime);
    }
	
	var passwordField1 = document.getElementById('Old-Password');
	var passwordField2 = document.getElementById('New-Password');
	var passwordField3 = document.getElementById('Confirm-Password');
	passwordField1.value = '';
	passwordField2.value = '';
	passwordField3.value = '';
}

// define the callAPI function that takes a first name and last name as parameters
var callAPI = (firstName,lastName)=>{
	// instantiate a headers object
	var myHeaders = new Headers();
	// add content type header to object
	myHeaders.append("Content-Type", "application/json");
	// using built in JSON utility package turn object to string and store in a variable
	var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
	// create a JSON object with parameters for API call and store in a variable
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};
	// make API call with parameters and use promises to get response
	fetch("https://sg9ye980k6.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
	.then(response => response.text())
	.then(result => alert(JSON.parse(result).body))
	.catch(error => console.log('error', error));
}
