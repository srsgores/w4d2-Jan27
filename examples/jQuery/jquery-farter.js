// live demo: https://codewith.seangoresht.com/preview/lectures/w4d2/examples/jQuery/jquery-farter.html

jQuery(function($) {
	// TODO: print "FART" for every time the fart button is pressed
	const $button = $(".fart-button");
	const $fartList = $(".farts");
	$button.on("click", function(event) {
		console.log(event.target);
		const $fart = $("li").addClass("fart").appendTo($fartList);
	});
});