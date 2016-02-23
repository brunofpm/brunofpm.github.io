$(document).ready(function(){

	/* Animação de envio de mensagem */

	$(".enviar").click(function () {
		$(".pergunta").addClass("animated zoomOutUp");
		$(".form .grupo label").hide();
		$(".enviar").hide();
		setTimeout(function() {
			$(".feedback").show();
		}, 1000);

		setTimeout(function() {
			location.reload();
		}, 6000);
	});


	/* Download Android */

	$(".dispositivos .android").click(function () {
		$(".botoes").addClass("animated slideOutLeft");
		$(".selecione").addClass("animated slideOutLeft");
		$(".instrucoes.android").show().addClass("animated slideInRight");
	});

	/* Download iOS */

	$(".dispositivos .ios").click(function () {
		$(".botoes").addClass("animated slideOutLeft");
		$(".selecione").addClass("animated slideOutLeft");
		$(".instrucoes.ios").show().addClass("animated slideInRight");
	});


	/* CMS - Selecionar */

	$(".enviadas li").click(function () {
		$(this).toggleClass("clicada");
	});



});