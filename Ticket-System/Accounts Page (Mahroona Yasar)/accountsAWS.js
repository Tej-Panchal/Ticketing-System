const API_ENDPOINT = "https://pgikxejuh9.execute-api.us-west-2.amazonaws.com/default/AccountsConnectionFunction";
		
fetch(API_ENDPOINT)
  .then(response => response.json())
  .then(data => {
    const tableData = [];

    data.forEach(item => {
      const checkbox = `<input type="checkbox" name="row-${item.id}">`;
      const rowData = `
        <tr>
          <td>${checkbox}</td>
          <td>${item.Username}</td>
          <td>${item.Date}</td>
          <td>${item.Permissions}</td>
          <td>${item.Status}</td>
        </tr>
      `;
      tableData.push(rowData);
    });

    document.querySelector('#accounts-table tbody').innerHTML = tableData.join('');
  });

  var addAccountPopup = null;

  function openAddAccountPopup() {
    addAccountPopup = window.open('../Homepage (Steven Graham)/AddAccount.html', 'Add Account', 'width=600,height=400');
  }
  
  window.addEventListener('unload', function() {
    if (addAccountPopup && addAccountPopup.closed) {
      window.location.reload();
    }
  });
  
   