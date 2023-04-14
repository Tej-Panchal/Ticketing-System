//Validating user:
if((String(localStorage.permissions) !== '"Technician"') && (String(localStorage.permissions) !== '"Customer"'))
	{
	 alert("Access Denied!");
	 window.location.href = "error.html";
	}

function signOut(){
    localStorage.clear();
  }