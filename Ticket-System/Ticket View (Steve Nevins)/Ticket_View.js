window.onload = function ()
{

setData();
	
//This is my code for dynamically adding shit. 
	
var comment = "";
var status_1 = "Pending";
var assigned_tech = "Unassigned";

document.getElementById("reset_button").addEventListener("click", reset_all);

function reset_all()
{	
	document.getElementById("Status").value = "Pending";
	
	document.getElementById("technician").value = "Unassigned";
	
	document.getElementById("comments").value = "";
}

//Code to update status section after change is validated. 

function update_status()
{
	callAPI("Steven Nevins",document.getElementById('Status').value, "Action", "Status Change", "3");
		
	//Formatting time stamp. 
	
	var date = new Date();
	
	var timestamp = date.getFullYear() + "/" + + (date.getMonth()+1)  + "/" + date.getDate() + " "  + date.getHours() + ":"  + date.getMinutes() + ":" + date.getSeconds();
	
	//Grabbing input data.
	
	input = document.getElementById("Status").value;
	
	status_1 = input;
	
	//Creating new elements. 
	
	var box = document.createElement("fieldset");
	
	var legend = document.createElement("legend");
	var legend = document.createElement("legend");
	
	var space = document.createElement("p");
	
	var tag = document.createElement("textarea");
	
	var element = document.getElementById("new");
	
	//Formatting new elements. 
	
	space.innerHTML = "\n" + "\n";
	
	legend.innerHTML = " @Steve Nevins - - - - - - - - " + timestamp;
	
	tag.rows = 5;
	
	tag.cols = 45;
	
	tag.innerHTML = "Action:\n" + "\n" + "Ticket Status = " + input + ".";
	
	//Adding elements to file.
	
	element.appendChild(space);
	
	element.appendChild(box);
	
	box.appendChild(legend);
	
	box.appendChild(tag);
	
}

//Code to update technician section after change is validated. 

function update_tech()
{
	callAPI("Steven Nevins",document.getElementById('technician').value, "Action", "Tech Change", "2");
	//Formatting time stamp. 
	
	var date = new Date();
	
	var timestamp = date.getFullYear() + "/" + + (date.getMonth()+1)  + "/" + date.getDate() + " "  + date.getHours() + ":"  + date.getMinutes() + ":" + date.getSeconds();
	
	//Grabbing input data.
	
	input = document.getElementById("technician").value;
	
	assigned_tech = input;
	
	//Creating new elements. 
	
	var box = document.createElement("fieldset");
	
	var legend = document.createElement("legend");
	
	var space = document.createElement("p");
	
	var tag = document.createElement("textarea");
	
	var element = document.getElementById("new");
	
	//Formatting new elements. 
	
	space.innerHTML = "\n" + "\n";
	
	legend.innerHTML = " @Steve Nevins - - - - - - - - " + timestamp;
	
	tag.rows = 5;
	
	tag.cols = 45;
	
	tag.innerHTML = "Action:\n" + "\n" + "Assigned Technician = " + input + ".";
	
	//Adding elements to file.
	
	element.appendChild(space);
	
	element.appendChild(box);
	
	box.appendChild(legend);
	
	box.appendChild(tag);
	
}

//Code to update comments section after change is validated. 

function update_comments()
{
	callAPI("Steven Nevins",document.getElementById('comments').value, "Comment", "N/A", "1");
	
	//Formatting time stamp. 
	
	var date = new Date();
	
	var timestamp = date.getFullYear() + "/" + + (date.getMonth()+1)  + "/" + date.getDate() + " "  + date.getHours() + ":"  + date.getMinutes() + ":" + date.getSeconds();
	
	//Grabbing input data.
	
	input = document.getElementById("comments").value;
	
	comment = input;
	
	//Creating new elements. 
	
	var box = document.createElement("fieldset");
	
	var legend = document.createElement("legend");
	
	var space = document.createElement("p");
	
	var tag = document.createElement("textarea");
	
	var element = document.getElementById("new");
	
	//Formatting new elements. 
	
	space.innerHTML = "\n" + "\n";
	
	legend.innerHTML = " @Steve Nevins - - - - - - - - " + timestamp;
	
	tag.rows = 5;
	
	tag.cols = 45;
	
	tag.innerHTML = "Comment:\n" + "\n" + input;
	
	//Adding elements to file.
	
	element.appendChild(space);
	
	element.appendChild(box);
	
	box.appendChild(legend);
	
	box.appendChild(tag);
	
	document.getElementById("comments").value = "";
	
}

//Code for handling submit button. 

document.getElementById("submit_button").addEventListener("click", handleClick);

function handleClick()
{
	check_comment();
	check_status();
	check_tech();
}

//TICKET STATUS SECTION//

function check_status()
{	
	input = document.getElementById("Status").value;
	
	if(input != status_1)
	{
		update_status();
	}
	
}	

//ASSIGNED TECH SECTION//
function check_tech()
{
	input = document.getElementById("technician").value;
	
	if(input != assigned_tech)
	{
		update_tech();
	}
	
}

//COMMENTS SECTION//
function check_comment()
{
    input = document.getElementById("comments").value;
	
	if((input != comment) && (input != ""))
	{
		update_comments();
	}
}

}