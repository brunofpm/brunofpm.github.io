$( document ).ready(function() {

		// CARROSSEL
		$('.principal-1').show();
		$('.um').click(function() {
			$('.carrossel li').hide();
			$('.principal-1').fadeIn('fast');
			$('.controle li').removeClass('selecionado');
			$(this).addClass('selecionado');
		});
		$('.dois').click(function() {
			$('.carrossel li').hide();
			$('.principal-2').fadeIn('fast');
			$('.controle li').removeClass('selecionado');
			$(this).addClass('selecionado');
		});
		$('.tres').click(function() {
			$('.carrossel li').hide();
			$('.principal-3').fadeIn('fast');
			$('.controle li').removeClass('selecionado');
			$(this).addClass('selecionado');
		});

		// SUBMENU
		$('.abrir-submenu').click(function() {
			$(this).next('.submenu').slideToggle('fast');
			$(this).children('.arrow').toggleClass('cima');
		});

});