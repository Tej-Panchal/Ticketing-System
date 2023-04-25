//Validating user:
if((String(localStorage.permissions) !== '"Technician"') && (String(localStorage.permissions) !== '"Customer"'))
	{
	 alert("Access Denied!");
	 window.location.href = "error.html";
	}

function message () {
	
	var Employee = document.getElementById('Employee');
	var Priority = document.getElementById('Priority');
	var Floor = document.getElementById('Floor');
	var Subject = document.getElementById('Subject');
	var Description = document.getElementById('Description');
	const success = document.getElementById('success');
	const danger = document.getElementById('danger');

	if (Employee.value === ''){
		danger.innerHTML = 'Please enter an employee name.';
		danger.style.display = 'block';
	}
	else if(Priority.value === '')
	{
		danger.innerHTML = 'Please select a priority value.';
		danger.style.display = 'block';
	}
	else if(Floor.value === '')
	{
		danger.innerHTML = 'Please select a floor.';
		danger.style.display = 'block';
	}
	else if(Subject.value === '')
	{
		danger.innerHTML = 'Please provide a brief subject.';
		danger.style.display = 'block';
	}
	else if(Description.value === '')
	{
		danger.innerHTML = 'Please provide a detailed description.';
		danger.style.display = 'block';
	}
	else {
		setTimeout(()=> {
			Employee.value = '';
			Priority.value = '';
			Floor.value = '';
			Subject.value = '';
			Description.value = '';
		}, 1000);

		success.style.display = 'block';
	}

	setTimeout(() => {
		danger.style.display = 'none';
		success.style.display = 'none';
	}, 4000);
}