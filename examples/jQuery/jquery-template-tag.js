// live demo here: https://codewith.seangoresht.com/preview/lectures/w4d2/examples/jQuery/jquery-template-tag.html

jQuery(function($) {
	const celebrities = ["Jonah Hill", "James Franco", "Lady GaGa", "Bradley Cooper"];
	const $listItemTemplate = $($("#list\\-item\\-template").html()); // don't select from shadow DOM; see https://stackoverflow.com/a/53768706
	const $celebrityList = $("#celebrity-list");
	const celebrityListHTML = celebrities.map((celebrity) => {
		const $template = $listItemTemplate.clone(true);
		const $slot = $template.find("slot:first").replaceWith(celebrity);
		return $template[0].outerHTML;
	}).join("\n");
	$celebrityList.html(celebrityListHTML);
});