$(document).ready(function() {
		
	$(".box ul li").click(function() {
		$(".match").fadeIn("fast");
		$(".transparencia").fadeIn("fast");
	});

	$(".match .fechar").click(function() {
		$(".match").fadeOut("fast");
		$(".transparencia").fadeOut("fast");
	});


	$(".box ul li").hover(
	  function () {
	    $(this).addClass("hover");
	  },
	  function () {
	    $(this).removeClass("hover");
	});


	$(".col1").hover(
	  function () {
	    $(".col2").animate({opacity: 0.4}, 300 );
	    $(".col3").animate({opacity: 0.4}, 300 );
	  },
	  function () {
	    $(".col2").animate({opacity: 1}, 300 );
	    $(".col3").animate({opacity: 1}, 300 );
	});
	$(".col2").hover(
	  function () {
	    $(".col1").animate({opacity: 0.4}, 300 );
	    $(".col3").animate({opacity: 0.4}, 300 );
	  },
	  function () {
	    $(".col1").animate({opacity: 1}, 300 );
	    $(".col3").animate({opacity: 1}, 300 );
	});
	$(".col3").hover(
	  function () {
	    $(".col2").animate({opacity: 0.4}, 300 );
	    $(".col1").animate({opacity: 0.4}, 300 );
	  },
	  function () {
	    $(".col2").animate({opacity: 1}, 300 );
	    $(".col1").animate({opacity: 1}, 300 );
	});


});