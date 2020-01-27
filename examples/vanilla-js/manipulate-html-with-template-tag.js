const celebrities = ["Jonah Hill", "James Franco", "Lady GaGa", "Bradley Cooper"];

const celebrityListItemTemplate = document.getElementById("list-item-template");

const celebrityList = document.getElementById("celebrity-list");

const celebritiesHTML = celebrities.map((celebrity) => {
	let listItem = celebrityListItemTemplate.cloneNode();
	listItem.querySelector("slot").outerHTML = celebrity;
	return listItem;
}).map((listItem) => celebrityList.appendChild(listItem));