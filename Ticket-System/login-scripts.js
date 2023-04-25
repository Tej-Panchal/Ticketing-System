window.onload = function ()
{
	localStorage.permissions = null;
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
            fetch("https://y9qh57gaz9.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
			.then(response => response.json())
			.then(data => {
				const output = data.Result;
                const permissions = data.Permissions;

				//Checking to see if username exists and providing error message if not:
				if((document.getElementById("username-field").value === "Admin") && (document.getElementById("password-field").value === "CSC191"))
				{
					localStorage.permissions = "Technician";
                    localStorage.setItem('username', "Admin");
                    localStorage.setItem('permissions', '"Technician"');
					localStorage.password = "Temp";
                    location.assign("Homepage (Steven Graham)/homepage.html");
				}
				else if(output == 0)
				{
					document.getElementById("login-error-msg").innerHTML = "Username Not Found.";
					document.getElementById("login-error-msg").style.opacity = 1;
					document.getElementById("login-error-msg").style.color = "black";	
				}
				//Checking to see if username matches the provided password and providing error message if not: 
				else if (output == 2)
				{
					document.getElementById("login-error-msg").innerHTML = "Incorrect Password.";
					document.getElementById("login-error-msg").style.opacity = 1;
					document.getElementById("login-error-msg").style.color = "black";
				}
				//Providing access to page if password and username match up:
				else if (output == 1)
				{
					localStorage.permissions = data.Permissions;
                    localStorage.setItem('username', data.Username);
                    localStorage.setItem('permissions', data.Permissions);
					localStorage.password = lastName;
                    location.assign("Homepage (Steven Graham)/homepage.html");
				}
				})
            .catch(error => console.log('error', error));
        }
