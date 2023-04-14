if(String(localStorage.permissions) !== '"Technician"')
	{
	 alert("Access Denied!");
	 window.location.href = "error.html";
	}
	
document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#add-account-form');
const API_ENDPOINT = 'https://pgikxejuh9.execute-api.us-west-2.amazonaws.com/default/AccountsConnectionFunction';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = form.elements.Username.value;
  const date = form.elements.Date.value;
  const permissions = form.elements.Permissions.value;
  

  const payload = {
    "Username": username,
    "Date": date,
    "Permissions": permissions,
    "Password": "Password123"
  };

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log('Success:', JSON.stringify(data));

        
  } catch (error) {
    console.error('Error:', error);
  }
  form.reset();
});

});
