const API_ENDPOINT = "https://xvdovsios7.execute-api.us-west-1.amazonaws.com/default/AccountsConnection";

fetch(API_ENDPOINT)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    if (!Array.isArray(data)) {
      throw new Error(`Invalid data format: expected an array, received ${typeof data}`);
    }

    const accountsTableData = [];

    data.forEach(item => {
      accountsTableData.push(`
        <tr>
          <td>${item.Username}</td>
          <td>${item.Date}</td>
          <td>${item.Permission}</td>
          <td>${item.Status}</td>
        </tr>
      `);
    });

    document.querySelector('#accounts-table tbody').innerHTML = accountsTableData.join('');
  })
  .catch(error => {
    console.error(error);
    // display an error message to the user, if desired
  });
