//User validation:
if(String(localStorage.permissions) !== '"Technician"')
	{
	 alert("Access Denied!");
	 window.location.href = "error.html";
	}



const API_ENDPOINT = "https://pgikxejuh9.execute-api.us-west-2.amazonaws.com/default/AccountsConnectionFunction";
AWS.config.update({region: 'us-west-2'});

		
fetch(API_ENDPOINT)
  .then(response => response.json())
  .then(data => {
    const tableData = [];

    data.forEach(item => {
      const checkbox = `<input type="checkbox" name="row-${item.id}">`;
      const rowData = `
        <tr>
          <td>${checkbox}</td>
          <td><a href="..\\Homepage (Steven Graham)\\EditAccount.html?id=${item.Username}">${item.Username}</a></td>
          <td>${item.Date}</td>
          <td>${item.Permissions}</td>
          
        </tr>
      `;
      tableData.push(rowData);
    });

    document.querySelector('#accounts-table tbody').innerHTML = tableData.join('');
  });

  function fetchAccountsAndUpdateTable() {
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        const tableData = [];
  
        data.forEach(item => {
          const checkbox = `<input type="checkbox" name="row-${item.id}">`;
          const rowData = `
            <tr>
              <td>${checkbox}</td>
              <td><a href="..\\Homepage (Steven Graham)\EditAccount.html?id=${item.Username}">${item.Username}</a></td>
              <td>${item.Date}</td>
              <td>${item.Permissions}</td>
              
            </tr>
          `;
          tableData.push(rowData);
        });
  
        document.querySelector('#accounts-table tbody').innerHTML = tableData.join('');
      });
  }
   

  var addAccountPopup = null;

function openAddAccountPopup() {
  addAccountPopup = window.open('../Homepage (Steven Graham)/AddAccount.html', 'Add Account', 'width=600,height=400');
  return false;
}

function openEditAccountPopup() {
  addAccountPopup = window.open('../Homepage (Steven Graham)/EditAccount.html', 'Edit Account', 'width=600,height=400');
  return false;
}

window.addEventListener('unload', function() {
  if (addAccountPopup && !addAccountPopup.closed) {
    reload();
  }
});

async function deleteAccount(username) {
  const API_ENDPOINT = 'https://pgikxejuh9.execute-api.us-west-2.amazonaws.com/default/AccountsConnectionFunction';
  const payload = {
    "TableName": "Accounts",
    "Key": {
      "Username": username
    }
  };

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'DELETE',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log('response:', response);
    console.log('data:', data);

  } catch (error) {
    console.error('Error:', error);
  }
}

async function deleteRow() {
  var table = document.getElementById("accounts-table");
  var index = 1;
  while (index < table.rows.length) {
    var input = table.rows[index].cells[0].children[0];
    if (input && input.checked) {
      var username = table.rows[index].cells[1].innerText;
      await deleteAccount(username);
      table.deleteRow(index);
      break;
    } else {
      index++;
    }
  }
}

document.getElementById('delete-button').addEventListener('click', deleteRow);








  
   