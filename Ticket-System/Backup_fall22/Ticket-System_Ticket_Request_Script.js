//script fo
let names = [
    "this",
    "is",
    "the",
    "name",
    "of",
    "an",
    "exhibit",
]
//sort names in ascending order
let sortedNames = names.sort();
console.log(sortedNames);

//reference
let input = document.getElementById("input");

//execute function on keyup
input.addEventListener("keyup", (e) => {
    //loop through above arrya
    //initially remove all elements ( so if user erases a letter or adds new letter than clean revious outputs)
    removeElements();
    for (let i of sortedNames) {
        //convert input to lowercase and comare with each stirng
        if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "") {
            //create li element
            let listItem = document.createElement("li");
            //one common class name
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");
            //display matched part in bold
            let word = "<b>" + i.substr(0, input.value.length) + "<b>";
            word += i.substr(input.value.length);
            //display the value in array
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});


function displayNames(value) {
    input.value = value;
    removeElements();
}
function removeElements() {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
}

//script for the dropdown button
function show(anything) {
    document.querySelector('.textBox').value = anything;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function () {
    dropdown.classList.toggle('active');
}
