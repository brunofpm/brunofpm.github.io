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


	/* CMS - Edit */

	$(".editar").click(function () {
		$(this).parent().parent().addClass("editando");
	});
	$(".salvar").click(function () {
		$(this).parent().parent().removeClass("editando");
	});

	/* CMS - Confirmação de Exclusão */

	$(".recusar").click(function () {
		$(".confirmacao").fadeIn("fast");
	});

	$(".confirmacao .cancelar").click(function () {
		$(".confirmacao").fadeOut("fast");
	});



});