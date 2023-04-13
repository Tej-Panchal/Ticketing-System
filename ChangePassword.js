
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // prevent form submission
    handleSubmit(event); // pass the event object as a parameter
});

function handleSubmit(event) {
	
    const oldPassword = document.getElementById("Old-Password").value;
    const newPassword = document.getElementById("New-Password").value;
    const confirmNewPassword = document.getElementById("Confirm-Password").value;
  
    const currentPassword = localStorage.password; // replace with your actual current password
  
    if (oldPassword !== currentPassword) {
      alert("Error: The old password is incorrect.");
    } else if (newPassword !== confirmNewPassword) {
      alert("Error: New password and confirmed password do not match.");
    } else {
	  
	  let str = localStorage.username;
	  str = str.replace(/"/g, ''); // Remove all quotation marks from the string
 
	  callAPI(str, newPassword);
	  
	  localStorage.password = newPassword;
    }
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