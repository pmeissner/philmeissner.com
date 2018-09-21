// $("h1").blast({ delimiter: "character" });
$(document).ready(function() {

AOS.init();

$(".red-button").click(function () {
	$('.grid > span').removeClass('aos-animate');
	$('.grid').fadeOut("slow");
	setTimeout(
  	function()
			{
			$('.grid').fadeIn();
			$("body").toggleClass("work");
			AOS.refreshHard();
  	}, 400);
	console.log('clicked');
});


 });

