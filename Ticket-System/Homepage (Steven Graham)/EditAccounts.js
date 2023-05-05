if(String(localStorage.permissions) !== '"Technician"')
	{
	 alert("Access Denied!");
	 window.location.href = "error.html";
	}

document.addEventListener('DOMContentLoaded', () => {

  async function fetchAccountById(id) {
    const response = await fetch(`${API_ENDPOINT}?id=${id}`);
    const account = await response.json();
    return account;
    

  }
  

const form = document.querySelector('#edit-account-form');
const API_ENDPOINT = 'https://pgikxejuh9.execute-api.us-west-2.amazonaws.com/default/AccountsConnectionFunction';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

if (id) {
  fetchAccountById(id).then(account => {
    console.log('Fetched account:', account);
    form.elements.Username.value = account.Username;
    form.elements.Date.value = account.Date;
    form.elements.Permissions.value = account.Permissions;
    
  });
}



form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = form.elements.Username.value;
  const date = form.elements.Date.value;
  const permissions = form.elements.Permissions.value;
  const resetPassword = form.elements.ResetPassword.checked;

  console.log('Reset password checkbox checked:', resetPassword); // Add this line to log the checkbox value


  const payload = {
    "Username": username,
    "Date": date,
    "Permissions": permissions,
  };

  // Add this condition to check if the reset password checkbox is checked
  if (resetPassword) {
    payload.Password = "Password123";
  }
  else
  {
	  payload.Password = localStorage.password;
  }

  const requestMethod = id ? 'PUT' : 'POST'; // Use PUT for updating if id exists, otherwise use POST for creating

  try {
    const response = await fetch(API_ENDPOINT, {
      method: requestMethod,
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log('Success:', JSON.stringify(data));

    form.reset(); // Move this line here
  } catch (error) {
    console.error('Error:', error);
  }

});



});
