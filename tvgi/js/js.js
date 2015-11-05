$(document).ready(function(){	

	$("ul.programas li.pai").children("div").css("width","954px");
	
 	$("ul.programas li.pai").click(function(event){
		//alert($(this).children("div").width());					   
		if($(this).children("div").width() == 954) {
			$("ul.programas li.pai").removeClass("mudaseta");
			$("ul.programas li.pai").children("div").slideUp("slow");			
			event.stopPropagation();
			$(this).children("div").slideDown("slow");
			$(this).addClass("mudaseta");
			$(this).children("div").css("width","955px");
		} else{
			$(this).children("div").slideUp("slow");
			$("ul.programas li.pai").children("div").css("width","954px");
			$("ul.programas li.pai").removeClass("mudaseta");
		}
	});
	
	
	$("ul.faq li.pai").children("div").css("width","599px");
	
	$("ul.faq li.pai").click(function(event){
		//alert($(this).children("div").width());					   
		if($(this).children("div").width() == 599) {
			$("ul.faq li.pai").removeClass("mudaseta");
			$("ul.faq li.pai").children("div.faq-aberto").slideUp("slow");			
			event.stopPropagation();
			$(this).children("div.faq-aberto").slideDown("slow");
			$(this).addClass("mudaseta");
			$(this).children("div.faq-aberto").css("width","600px");
		} else{
			$(this).children("div.faq-aberto").slideUp("slow");
			$("ul.faq li.pai").children("div.faq-aberto").css("width","599px");
			$("ul.faq li.pai").removeClass("mudaseta");
		}
	});
	
	
	/* RETIRAR O VALUE DO INPUT AO CLICAR */
	$('input[type="text"]').addClass("idleField");
       		$('input[type="text"]').focus(function() {
       			$(this).removeClass("idleField").addClass("focusField");
    		    if (this.value == this.defaultValue){ 
    		    	this.value = '';
				}
				if(this.value != this.defaultValue){
	    			this.select();
	    		}
    		});
    		$('input[type="text"]').blur(function() {
    			$(this).removeClass("focusField").addClass("idleField");
    		    if ($.trim(this.value) == ''){
			    	this.value = (this.defaultValue ? this.defaultValue : '');
				}
    });
});