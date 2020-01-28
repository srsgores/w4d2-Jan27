// live demo here: https://codewith.seangoresht.com/preview/lectures/w4d2/examples/vanilla-js/template-tag.html

const celebrities = ["Jonah Hill", "James Franco", "Lady GaGa", "Bradley Cooper"];

const celebrityListItemTemplate = document.getElementById("list-item-template");

const celebrityList = document.getElementById("celebrity-list");

const celebritiesHTML = celebrities.map((celebrity) => {
	let listItem = celebrityListItemTemplate.content.cloneNode(true);
	listItem.querySelector("slot").outerHTML = celebrity;
	return listItem;
});

celebrityList.innerHTML = ""; // remove the progress bar

celebritiesHTML.map((listItem) => celebrityList.appendChild(listItem));