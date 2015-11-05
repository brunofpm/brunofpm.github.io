// JavaScript Document
$(document).ready(function(){
						   
	$('.bot-1').click(function(){ 
		$(".imagem-01").fadeIn("slow");
		$(".imagem-02").hide();
		$(".imagem-03").hide();
	});
	$('.bot-2').click(function(){ 
		$(".imagem-02").fadeIn("slow");
		$(".imagem-01").hide();
		$(".imagem-03").hide();
	});
	$('.bot-3').click(function(){ 
		$(".imagem-03").fadeIn("slow");
		$(".imagem-02").hide();
		$(".imagem-01").hide();
	});
	
	setInterval(function() {
      $(".imagem-02").fadeIn("slow");
	  $(".imagem-01").hide();
	  $(".imagem-03").hide();
	}, 8000);
	
	setInterval(function() {
      $(".imagem-03").fadeIn("slow");
		$(".imagem-02").hide();
		$(".imagem-01").hide();
	}, 16000);
	
});
