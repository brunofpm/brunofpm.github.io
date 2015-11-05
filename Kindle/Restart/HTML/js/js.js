$(document).ready(function() {

	$(".musica-2").click(function () {
		  	//$(".video-1").css({ display:"none" });
			alert("teste");
	});
	
	
	
	$(".fotos-1").show();
	$(".fotos-2").hide();
	
	$(".maisfotos").click(function () {
		  	$(".fotos-1").toggle();
			$(".fotos-2").toggle();

	});
	
	
});