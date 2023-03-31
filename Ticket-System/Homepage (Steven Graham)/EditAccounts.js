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
    form.elements.Status.value = account.Status;
  });
}



form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = form.elements.Username.value;
  const date = form.elements.Date.value;
  const permissions = form.elements.Permissions.value;
  const status = form.elements.Status.value;

  const payload = {
    "Username": username,
    "Date": date,
    "Permissions": permissions,
    "Status": status
  };

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
