$(document).ready(function() {
	
	
	
	
	// DISPARO DO POP DE MENSAGENS
	$('ul.menu-principal li.correio a').toggle(function() {
		$('ul.menu-principal li.correio .pop-menu-principal').fadeIn('fast');
	}, function() {
		$('ul.menu-principal li.correio .pop-menu-principal').fadeOut('fast');
	});

	// JQTRANSFORM
	$(function() {
	    //find all form with class jqtransform and apply the plugin
	    $(".jqtransform").jqTransform();
	});

	//ABRIR E FECHAR O REFINAR BUSCA
	$('.busca-refinar').click(function() {
	  $('.form-refine-search').slideToggle('fast', function() {
	    // Animation complete.
	  });
	});


});