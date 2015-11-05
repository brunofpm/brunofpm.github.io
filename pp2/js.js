$(document).ready(function() {

	// Menu lateral

	$('.header1.out .menu-ico').click(function() {
		$('.side-menu-open').show();
		$(".side-menu").animate({
				left : '+=245',
			}, 500, function() {
		});
	});
	$('.side-menu .menu-ico').click(function() {
		$(".side-menu").animate({
				left : '-=245',
			}, 500, function() {
				$('.side-menu-open').hide('fast');
		});
		
	});
	$('.side-menu-opacity').click(function() {
		$(".side-menu").animate({
				left : '-=245',
			}, 500, function() {
				$('.side-menu-open').hide('fast');
		});
		
	});


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

	$(".busca-refinar").click(function() {
		$('.form-refine-search').slideDown('fast');
	});

	$(".form-refine-search .txt-fechar").click(function() {
		$('.form-refine-search').slideUp('fast');
	});


	// ABRIR E FECHAR O EXPRESSO

	$(".express").click(function() {
		$('.express-div').slideToggle('fast');
		$(this).toggleClass('ativo');
		$(this).children('.seta').toggleClass('selected');
	});


	// CHECK DO EXPRESSO

	$(".box-foto").click(function() {
		$(this).children('.express-check').toggle();
	});


	// ICONES DA BUSCA POR LISTA

	var larguraDaTela = $('.gallery.list').width();
	$('.pull-div').css('left', larguraDaTela);
	$('.pull-div').css('width', larguraDaTela - 100);
	var larguraDaAnimacao = larguraDaTela - 100;

	$(window).on('resize', function(){
	    var larguraDaTela = $('.gallery.list').width();
		$('.pull-div').css('left', larguraDaTela);
		$('.pull-div').css('width', larguraDaTela - 100);
		var larguraDaAnimacao = larguraDaTela - 100;
	});
	
	$('.pull-div .arrow-in').click(function() {
		$(this).parent('.pull-div').animate({
				left : '-='+larguraDaAnimacao,
			}, 500, function() {
		});
		$(this).fadeOut('fast');
	});

	$('.pull-div .arrow-out').click(function() {
		$(this).parent('.pull-div').animate({
				left : '+='+larguraDaAnimacao,
			}, 500, function() {
		});
		$(this).parent().children('.arrow-in').fadeIn('fast');
	});


	// $('.pull-div .arrow-in').click(function() {
	// 	$(this).parent('.pull-div').animate({
	// 			left : '-='+larguraDaAnimacao,
	// 		}, 500, function() {
	// 	});
	// 	$(this).fadeOut('fast');
	// });

	// $('.pull-div .arrow-out').click(function() {
	// 	$(this).parent('.pull-div').animate({
	// 			left : '+='+larguraDaAnimacao,
	// 		}, 500, function() {
	// 	});
	// 	$(this).parent().children('.arrow-in').fadeIn('fast');
	// });


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
	$('.resignation-select label').click(function() {
		var opcaoEscolhida = $(this).children('.txt').html();
		$(this).parent('.box-radios').fadeOut('fast');
		$('.box-radios-cover').fadeOut('fast');
		$(this).parent('.box-radios').prev('.fake-select').html(opcaoEscolhida + '<i></i>');

		var valueOpcao = $(this).children('.box-input').children('input').attr('id');
		valueOpcao = valueOpcao.substring(valueOpcao.length - 1);

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


	$('.meet-where label').click(function() {
		var opcaoEscolhida = $(this).children('.txt').html();
		$(this).parent('.box-radios').fadeOut('fast');
		$('.box-radios-cover').fadeOut('fast');
		$(this).parent('.box-radios').prev('.fake-select').html(opcaoEscolhida + '<i></i>');

		var valueOpcao2 = $(this).children('.box-input').children('input').attr('id');
		valueOpcao2 = valueOpcao2.substring(valueOpcao2.length - 1);

		if (valueOpcao2 == 0) {
			$(".opt5 .starthidden").hide();
	    }

	    if (valueOpcao2 == 1) {
			$(".opt5 .starthidden").hide();
	        $(".opt5-1").show();
	        $(".opt5 .show-buttons").show();
	    }

	    if (valueOpcao2 == 2) {
			$(".opt5 .starthidden").hide();
	        $(".opt5-2").show();
	    }

	    if (valueOpcao2 == 3) {
			$(".opt5 .starthidden").hide();
	        $(".opt5-3").show();
	    }

	    if (valueOpcao2 == 4) {
			$(".opt5 .starthidden").hide();
	        $(".opt5-4").show();
	        $(".opt5 .show-buttons").show();
	    }

	});


	$('.sites label').click(function() {
		var opcaoEscolhida = $(this).children('.txt').html();
		$(this).parent('.box-radios').fadeOut('fast');
		$('.box-radios-cover').fadeOut('fast');
		$(this).parent('.box-radios').prev('.fake-select').html(opcaoEscolhida + '<i></i>');

		var valueOpcao3 = $(this).children('.box-input').children('input').attr('id');
		valueOpcao3 = valueOpcao3.substring(valueOpcao3.length - 1);

		if (valueOpcao3 == 0) {
			$(".opt5 .sites-txt").hide();
			$(".opt5 .show-buttons").hide();
	    } else {
	    	$(".sites-txt").show();
			$(".opt5 .show-buttons").show();
	    }
		
	});


	$('.out-of-internet label').click(function() {
		var opcaoEscolhida = $(this).children('.txt').html();
		$(this).parent('.box-radios').fadeOut('fast');
		$('.box-radios-cover').fadeOut('fast');
		$(this).parent('.box-radios').prev('.fake-select').html(opcaoEscolhida + '<i></i>');

		var valueOpcao4 = $(this).children('.box-input').children('input').attr('id');
		valueOpcao4 = valueOpcao4.substring(valueOpcao4.length - 1);

		if (valueOpcao4 == 0) {
			$(".opt5 .out-of-internet-txt").hide();
			$(".opt5 .show-buttons").hide();
	    } else {
	    	$(".out-of-internet-txt").show();
			$(".opt5 .show-buttons").show();
	    }
		
	});


	$('.site-features label').click(function() {
		var opcaoEscolhida = $(this).children('.txt').html();
		$(this).parent('.box-radios').fadeOut('fast');
		$('.box-radios-cover').fadeOut('fast');
		$(this).parent('.box-radios').prev('.fake-select').html(opcaoEscolhida + '<i></i>');

		var valueOpcao5 = $(this).children('.box-input').children('input').attr('id');
		valueOpcao5 = valueOpcao5.substring(valueOpcao5.length - 1);

		if (valueOpcao5 == 0) {
			$(".opt6 .starthidden").hide();
	    }

	    if (valueOpcao5 == 1) {
			$(".opt6 .starthidden").hide();
	        $(".opt6-1").show();
	        $(".opt6 .show-buttons").show();
	    }

	    if (valueOpcao5 == 2) {
			$(".opt6 .starthidden").hide();
	        $(".opt6-2").show();
	        $(".opt6 .show-buttons").show();
	    }

	    if (valueOpcao5 == 3) {
			$(".opt6 .starthidden").hide();
	        $(".opt6-3").show();
	        $(".opt6 .show-buttons").show();
	    }

	    if (valueOpcao5 == 4) {
			$(".opt6 .starthidden").hide();
	        $(".opt6-4").show();
	        $(".opt6 .show-buttons").show();
	    }

	    if (valueOpcao5 == 5) {
			$(".opt6 .starthidden").hide();
	        $(".opt6-5").show();
	        $(".opt6 .show-buttons").show();
	    }

	    if (valueOpcao5 == 6) {
			$(".opt6 .starthidden").hide();
	        $(".opt6-6").show();
	        $(".opt6 .show-buttons").show();
	    }

	    if (valueOpcao5 == 7) {
			$(".opt6 .starthidden").hide();
	        $(".opt6-7").show();
	        $(".opt6 .show-buttons").show();
	    }

	});

	// fim SELECTS RESIGNATION



	// FAKE SELECT

	$('.fake-select').click(function() {
		$(this).next('.box-radios').fadeIn('fast');
		$('.box-radios-cover').fadeIn('fast');
	});


	// FAKE SELECT - clique fora do fake select aberto faz ele fechar

	$(".box-radios-cover").click
	(
	  function(e)
	  {
	    if(e.target.className != "box-radios")
	    {
	      $(".box-radios").hide();
	      $(".box-radios-cover").hide();
	    }
	  }
	);



	// PROFILE CAPTURE - MODAL
	$('.profile-capture .more-information').click(function() {
		$('.modal-profile-highlight').fadeIn("fast");
	});

	$('.modal-profile-highlight .close').click(function() {
		$('.modal-profile-highlight').fadeOut("fast");
	});

	$('.modal-profile-highlight .bg-opacity').click(function() {
		$('.modal-profile-highlight').fadeOut("fast");
	});


	// PROFILE CAPTURE - BOTÃO MAIS
	var num = $('.profile-capture .options-box .expansible label').size();
    if (num > 4) {
		$(".profile-capture .options-box .more-options").show();
    };

	$(".profile-capture .options-box .more-options").toggle(function() {
	  $('.profile-capture .options-box .expansible').css("height", "auto");
	  $(this).addClass('open');
	}, function() {
	  $('.profile-capture .options-box .expansible').css("height", "183px");
	  $(this).removeClass('open');
	});


	// CHECK DO FACEBOOK PHOTO -RADIO
	$('.fb-photo ul.photo-list li').click(function() {
		$('.fb-photo ul.photo-list li i').removeClass("checked");
		$(this).children('i').addClass("checked");
	});


	// Abrir e Fechar modal de Enviar foto
	$('.profile-capture .face-photo-right .btn').click(function() {
		$('.alert-action-messages.withclose').fadeIn("fast");
	});
	$('.alert-action-messages.withclose .close').click(function() {
		$(this).parent('.alert-action-messages.withclose').fadeOut("fast");
	});
	

	// Altura das fotos do Facebook
	$(window).resize(function(){
        var larguraFoto = $('.fb-photo ul.photo-list li').width();
		$('.fb-photo ul.photo-list li').height(larguraFoto);
    });

    // FECHAR LIGHTBOX DA EDIÇÃO DE PERFIL
	$('.lbPhotoEditor .close').click(function() {
		$(this).parent('.lbPhotoEditor').fadeOut("fast");
	});


	// Abrir e Fechar modal de Editar foto
	$('.bt-edit-face-photo').click(function() {
		$('.edit-photo-modal').fadeIn("fast");
	});
	$('.alert-action-messages.withclose .close').click(function() {
		$(this).parent('.alert-action-messages.withclose').fadeOut("fast");
	});


});