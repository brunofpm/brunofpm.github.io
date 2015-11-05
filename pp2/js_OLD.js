$(document).ready(function() {

	// DISPARO DO POP DE MENSAGENS

	$('ul.menu-principal li.correio a').click(function() {
		$('ul.menu-principal li.correio .pop-menu-principal').slideToggle('fast');
	});

	// JQTRANSFORM
	$(function() {
		// find all form with class jqtransform and apply the plugin
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

	$(".busca-refinar").toggle(function() {
		$('.form-refine-search').slideDown('fast');
		$('.busca-refinar').addClass('aberto');	
		$('ul.busca-nav-bar li .link.busca-refinar .seta').addClass('setaup');
		$('ul.busca-nav-bar').css('background-color', '#f5f5f5 !important');
		$('.busca-refinar .txt-aberto').show();
		$('.busca-refinar .txt-fechado').hide();
	}, function() {
		$('.form-refine-search').slideUp('fast');
		$('.busca-refinar').removeClass('aberto');
		$('ul.busca-nav-bar li .link.busca-refinar .seta').removeClass('setaup');
		$('ul.busca-nav-bar').css('background-color', '#f5f5f5 !important');
		$('.busca-refinar .txt-aberto').hide();
		$('.busca-refinar .txt-fechado').show();
	});

	// CAROUSEL

	var numItems = $('.photo-carousel .photos li').length;
	var larguraSlider = numItems * 68;
	var larguraDaMascara = $('.photo-carousel .mask').width();

	if (larguraSlider < larguraDaMascara) {
		$('.profile-arrow-div-right').hide();
	}

	var marginLeftSlider = $('.photo-carousel .mask .slider').css('margin-left');

	$('.photo-carousel .profile-arrow-div-right span').click(function() {

		$('.profile-arrow-div-left').show('fast');
		$('.photo-carousel .mask .slider').animate({
			marginLeft : '-=136',
		}, 500, function() {
		});

	});

	$('.photo-carousel .profile-arrow-div-left span').click(function() {
		var marginLeftSlider = $('.photo-carousel .mask .slider').css('margin-left');

		if (marginLeftSlider != ('0px')) {
			$('.photo-carousel .mask .slider').animate({
				marginLeft : '+=136',
			}, 500, function() {
			});
		}
		if (marginLeftSlider == ('-136px')) {
			$('.profile-arrow-div-left').hide('slow');
		}
	});

	// SUGESTAO DE APELIDO

	$('.username-suggestions ul li').click(function() {
		var str = $(this).text();
		$(".reg-username-input").val(str);
		$('.username-suggestions').fadeOut("fast");
	});

	/* WIPE DO CARROSSEL

	$(".slider").wipetouch({
	    wipeRight : function(result) {
		    var marginLeftSlider = $('.photo-carousel .mask .slider').css('margin-left');

		    if (marginLeftSlider != ('0px')) {
			    $('.photo-carousel .mask .slider').animate({
				    marginLeft : '+=136',
			    }, 500, function() {
			    });
		    }
		    if (marginLeftSlider == ('-136px')) {
			    $('.profile-arrow-div-left').hide('slow');
		    }
	    },
	    wipeLeft : function(result) {
		    $('.profile-arrow-div-left').show('fast');
		    $('.photo-carousel .mask .slider').animate({
			    marginLeft : '-=136',
		    }, 500, function() {
		    });
	    },
	}); */

	// PROFILE ABAS

	$('.about-me').click(function() {
		$('.box-about-me').show();
		$(this).addClass('active');
		$('.box-about-who-i-look-for').hide();
		$('.about-who-i-look-for').removeClass('active');
	});
	$('.about-who-i-look-for').click(function() {
		$('.box-about-who-i-look-for').show();
		$(this).addClass('active');
		$('.box-about-me').hide();
		$('.about-me').removeClass('active');
	});

	// PROFILE LIGHTBOX

	$('.photo-carousel .photos li img').click(function() {
		$('.profile-lightbox-bg').fadeIn('fast');
		$('.profile-lightbox').fadeIn('fast');
	});
	$('.photo-carousel .icon-display').click(function() {
		$('.profile-lightbox-bg').fadeIn('fast');
		$('.profile-lightbox').fadeIn('fast');
	});

	$('.profile-lightbox .close-button').click(function() {
		$('.profile-lightbox-bg').fadeOut('fast');
		$('.profile-lightbox').fadeOut('fast');
	});

	// ADD TO FAVORITE

	$('.profile-actions .action-favorite').click(function() {
		$('.profile-actions .action-favorite').fadeIn('fast');
	});

	$(".profile-actions .action-favorite").toggle(function() {
		$('.profile-actions .action-favorite .icon-actions').addClass('active');
	}, function() {
		$('.profile-actions .action-favorite .icon-actions').removeClass('active');
	});


	// ERASE MODE

	$('.erase-msg').click(function() {
		$('.box-buttons-erase-mode').addClass('erase-mode');
		$('ul.gallery.list').addClass('erase-mode');
		$('.erase-msg').addClass('erase-mode');
		$('.search-more-users').css('margin', '15px auto 70px');
	});

	$('.buttons-erase-mode .cancelar').click(function() {
		$('.box-buttons-erase-mode').removeClass('erase-mode');
		$('ul.gallery.list').removeClass('erase-mode');
		$('.erase-msg').removeClass('erase-mode');
		$('.search-more-users').css('margin', '15px auto 15px');
	});


	// ADD/EDIT/REMOVE FACE PHOTO

	$('.bt-edit-face-photo').click(function(e) {
		e.stopPropagation();
		$('.dropdown-edit-face-photo').show();
		$('.bt-edit-face-photo').hide();
	});

	$('.bt-edit-face-photo-close').click(function(e) {
		e.stopPropagation();
		$('.dropdown-edit-face-photo').hide();
		$('.bt-edit-face-photo').show();
	});

	$('body').click(function(){
		$('.dropdown-edit-face-photo').hide();
		$('.bt-edit-face-photo').show();
	});



	// CLOSE MODAL DE ENVIAR FOTO DE ROSTO

	$('.div-send-photo').delay(800).fadeIn(800);

	$('.modal-send-photo .close').click(function() {
		$('.div-send-photo').fadeOut("fast");
	});


	// CLOSE MODAL DE DESCONTO

	$('.modal-discount .close').click(function() {
		$(this).parent().parent('.div-opacity').fadeOut("fast");
	});


	// ALERTA DE INFORMACOES PESSOAIS NO INBOX

	$('.alert-info-pessoais').hide();

	$('.alert-info-pessoais .alert-msg-bt').click(function() {
		$('.alert-info-pessoais').fadeOut('fast');
	});


	// IFRAMES ACORDO DE UTILIZACAO E POLITICA DE PRIVACIDADE

	$('.link-acordo').click(function() {
		$('.acordo').fadeIn('fast');
	});

	$('.link-politica').click(function() {
		$('.politica').fadeIn('fast');
	});

	$('.iframe-acordo-politica i').click(function() {
		$(this).parent().fadeOut('fast');
	});


	// SANFONA DA PÁGINA DE BILLING

	$('.billing-click').click(function() {
		$(this).next('.billing-close').slideToggle('fast');
	});


	// SELECTS RESIGNATION

	$(".opt0").show();
	$('.resignation-select').change(function() {
		var valueOpcao = $('.resignation-select option:selected').val();

		if (valueOpcao == 0) {
			$(".starthidden").hide();
	    }
		
		if (valueOpcao == 1) {
			$(".starthidden").hide();
	        $(".opt1").show();
	     }

	     if (valueOpcao == 2) {
			$(".starthidden").hide();
	        $(".opt2").show();
	     }

	     if (valueOpcao == 3) {
			$(".starthidden").hide();
	        $(".opt3").show();
	     }

	     if (valueOpcao == 4) {
			$(".starthidden").hide();
	        $(".opt1").show();
	     }

	     if (valueOpcao == 5) {
			$(".starthidden").hide();
	        $(".opt5").show();
	     }

	     if (valueOpcao == 6) {
			$(".starthidden").hide();
	        $(".opt6").show();
	     }

	     if (valueOpcao == 7) {
			$(".starthidden").hide();
	        $(".opt6").show();
	     }

	     if (valueOpcao == 8) {
			$(".starthidden").hide();
	        $(".opt8").show();
	     }

	});


	$('.meet-where').change(function() {
		var valueOpcao = $('.meet-where option:selected').val();

		if (valueOpcao == 0) {
			$(".opt5 .starthidden").hide();
	    }

	    if (valueOpcao == 1) {
			$(".opt5 .starthidden").hide();
	        $(".opt5-1").show();
	        $(".opt5 .show-buttons").show();
	    }

	    if (valueOpcao == 2) {
			$(".opt5 .starthidden").hide();
	        $(".opt5-2").show();
	    }

	    if (valueOpcao == 3) {
			$(".opt5 .starthidden").hide();
	        $(".opt5-3").show();
	    }

	    if (valueOpcao == 4) {
			$(".opt5 .starthidden").hide();
	        $(".opt5-4").show();
	        $(".opt5 .show-buttons").show();
	    }

	});


	$('.sites').change(function() {
		var valueOpcao = $('.sites option:selected').val();

		if (valueOpcao == 0) {
			$(".opt5 .sites-txt").hide();
			$(".opt5 .show-buttons").hide();
	    } else {
	    	$(".sites-txt").show();
			$(".opt5 .show-buttons").show();
	    }
		
	});


	$('.out-of-internet').change(function() {
		var valueOpcao = $('.out-of-internet option:selected').val();

		if (valueOpcao == 0) {
			$(".opt5 .out-of-internet-txt").hide();
			$(".opt5 .show-buttons").hide();
	    } else {
	    	$(".out-of-internet-txt").show();
			$(".opt5 .show-buttons").show();
	    }
		
	});


	$('.site-features').change(function() {
		var valueOpcao = $('.site-features option:selected').val();

		if (valueOpcao == 0) {
			$(".opt6 .starthidden").hide();
	    }

	    if (valueOpcao == 1) {
			$(".opt6 .starthidden").hide();
	        $(".opt6-1").show();
	        $(".opt6 .show-buttons").show();
	    }

	    if (valueOpcao == 2) {
			$(".opt6 .starthidden").hide();
	        $(".opt6-2").show();
	        $(".opt6 .show-buttons").show();
	    }

	    if (valueOpcao == 3) {
			$(".opt6 .starthidden").hide();
	        $(".opt6-3").show();
	        $(".opt6 .show-buttons").show();
	    }

	    if (valueOpcao == 4) {
			$(".opt6 .starthidden").hide();
	        $(".opt6-4").show();
	        $(".opt6 .show-buttons").show();
	    }

	    if (valueOpcao == 5) {
			$(".opt6 .starthidden").hide();
	        $(".opt6-5").show();
	        $(".opt6 .show-buttons").show();
	    }

	    if (valueOpcao == 6) {
			$(".opt6 .starthidden").hide();
	        $(".opt6-6").show();
	        $(".opt6 .show-buttons").show();
	    }

	    if (valueOpcao == 7) {
			$(".opt6 .starthidden").hide();
	        $(".opt6-7").show();
	        $(".opt6 .show-buttons").show();
	    }

	});

	// fim SELECTS RESIGNATION



	// FAKE SELECT

	$('.fake-select').click(function() {
		$(this).next('.box-radios').fadeIn('fast');
	});

	$('.box-radios label').click(function() {
		var opcaoEscolhida = $(this).children('.txt').html();
		$(this).parent('.box-radios').fadeOut('fast');
		$(this).parent('.box-radios').prev('.fake-select').html(opcaoEscolhida);
	});


});