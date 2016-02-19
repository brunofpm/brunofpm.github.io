$(document).ready(function(){
  
	setTimeout(function() {
		$(".area-1").addClass("animated bounceInDown");
	}, 800);

	setTimeout(function() {
		$(".duplas").addClass("animated bounceInUp");
	}, 1600);


	/* Eliminada */

	setTimeout(function() {
		$(".dupla.um").addClass("eliminada animated shake");
	}, 4000);


	/* Encontrar eliminado */

	$('.dupla .participante:last-child').each(function () {
		if( $(this).text()) {
	        $(this).addClass("txt-eliminada");
	        $(this).parent(".dupla").addClass("eliminada");
	    }
	});

});