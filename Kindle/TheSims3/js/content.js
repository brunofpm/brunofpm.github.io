// JavaScript Document
$(document).ready(function(){
	
	var contali = $('.carrossel li').size();
	//alert(contali);
	
	var liatual = 1;
						   
	function direita(){
		$('.carrossel').animate({"marginLeft":"-=372px"},500);
		liatual++;
	}
	function esquerda(){
		$('.carrossel').animate({"marginLeft":"+=372px"},500);
		liatual--;
	}
		
		
	$('a.seta-dir').click(function(){ 
		if (liatual < contali){
		direita();
		}
	});
	$('a.seta-esq').click(function(){ 
		if (liatual > 1){					   
		esquerda();
		}
	});
});
