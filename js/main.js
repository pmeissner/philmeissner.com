// $("h1").blast({ delimiter: "character" });
$(document).ready(function() {

AOS.init();

$("#switch").click(function () {
	$('h1 > span').removeClass('aos-animate');
	setTimeout(
  	function()
			{
			$("body").toggleClass("work");
			AOS.refreshHard();
  	}, 400);
	console.log('clicked');
});


 });

