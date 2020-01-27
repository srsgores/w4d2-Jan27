(function($) {
	const celebrities = ["Jonah Hill", "James Franco", "Lady GaGa", "Bradley Cooper"];
	const $listItemTemplate = $("#list-item-template");
	const $celebrityList = $(".celebrity-list");
	const celebrityListHTML = celebrities.map((celebrity) => $listItemTemplate.clone().find("slot:first").html(celebrity));
	$celebrityList.html(celebrityListHTML);
});