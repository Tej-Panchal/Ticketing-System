//Validating user:
if((String(localStorage.permissions) !== '"Technician"') && (String(localStorage.permissions) !== '"Customer"'))
	{
	 alert("Access Denied!");
	 window.location.href = "error.html";
	}

window.onload = function ()
{

document.addEventListener("DOMContentLoaded", function() {
    const username = localStorage.getItem('username');
    const permission = localStorage.getItem('permissions');
  
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
      welcomeMessage.innerHTML = `Welcome, ${username} (Permission: ${permission})`.replace(/['"]+/g, '');
    }

    user.innerHTML = `${username}`.replace(/['"]+/g, '');

    perm.innerHTML = `${permission}`.replace(/['"]+/g, '');
  });
  