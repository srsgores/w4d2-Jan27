(function($) {
	const celebrities = ["Jonah Hill", "James Franco", "Lady GaGa", "Bradley Cooper"];
	const celebrityFAQItemHTML = celebrities.reduce((concatenatedCelebrityNames, celebrityName) => {
		return concatenatedCelebrityNames + `<li>${celebrityName}</li>`;
	}, "");
	const $accordion = $("#celebrity-faq");
	if ($accordion.length !== 0) {
		$accordion.html(celebrityFAQItemHTML);
	}
});