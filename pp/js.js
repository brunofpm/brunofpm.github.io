$(document).ready(function() {
	
	
	
	
	// DISPARO DO POP DE MENSAGENS


	$('ul.menu-principal li.correio a').click(function() {
		$('ul.menu-principal li.correio .pop-menu-principal').slideToggle('fast');
	});


	// JQTRANSFORM
	$(function() {
	    //find all form with class jqtransform and apply the plugin
	    $(".jqtransform").jqTransform();
	});

	// ABRIR E FECHAR O TOP MENU
	$('.top-menu-closed').click(function() {
	  $('.top-menu').show('fast', function() {
	  });
	});
	$('.top-menu-header').click(function() {
	  $('.top-menu').hide('fast', function() {
	  });
	});

	// ABRIR E FECHAR O REFINAR BUSCA
	
	$(".busca-refinar").toggle(
      function () {
        $('.form-refine-search').slideDown('fast');
        $('.busca-refinar').css('background-color', '#C9C9C9');
        $('ul.busca-nav-bar').css('background-color', '#C9C9C9');
        $('ul.busca-nav-bar li a.busca-refinar .seta').css('background-position', '-75px -69px');
      },
      function () {
        $('.form-refine-search').slideUp('fast');
        $('.busca-refinar').css('background-color', '#D9D7D7');
        $('ul.busca-nav-bar').css('background-color', '#D9D7D7');
        $('ul.busca-nav-bar li a.busca-refinar .seta').css('background-position', '-63px -69px');
      }
    );

	
	// CARROSSEL

 
	var numItems = $('.photo-carousel .photos li').length;
	var larguraSlider = numItems*68;
	var larguraDaMascara = $('.photo-carousel .mask').width();

	if (larguraSlider<larguraDaMascara){
		$('.profile-arrow-div-right').hide();
	}

	var marginLeftSlider = $('.photo-carousel .mask .slider').css('margin-left');
	
	$('.photo-carousel .profile-arrow-div-right span').click(function() {

			$('.profile-arrow-div-left').show('fast');
			$('.photo-carousel .mask .slider').animate({
			    marginLeft: '-=136',
			}, 500, function() {
			});
		  
	});
		
	
	$('.photo-carousel .profile-arrow-div-left span').click(function() {
		var marginLeftSlider = $('.photo-carousel .mask .slider').css('margin-left');

		if(marginLeftSlider!=('0px')) {
		  	$('.photo-carousel .mask .slider').animate({
		    	marginLeft: '+=136',
		  	}, 500, function() {
		  	});
	   	}
	  	if(marginLeftSlider==('-136px')){
			$('.profile-arrow-div-left').hide('slow');
		}
	});



	// SWIPE DO CARROSSEL
	
	var slides = jQuery('.photo-carousel .mask'),
    i = 0;

	slides
	.on('swipeleft', function(e) {
	  $('.profile-arrow-div-left').show('fast');
			$('.photo-carousel .mask .slider').animate({
			    marginLeft: '-=136',
			}, 500, function() {
			});
	})
	



});








