$(document).ready(function(){	


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
			
			
			
	$('textarea').addClass("idleField");
	var texto = "Sua resposta";
       		$('textarea').focus(function() {
       			$(this).removeClass("idleField").addClass("focusField");
    		    if ($('textarea').val() == texto){ 
    		    	$('textarea').val() = '';
				}
				if($('textarea').val() != texto){
	    			this.select();
	    		}
    		});
    		$('textarea').blur(function() {
    			$(this).removeClass("focusField").addClass("idleField");
    		    if ($.trim($('textarea').val()) == ''){
			    	$('textarea').val() = texto;
				}
    });
			
	
	$('.regulamento').click(function() {
       			$('.box-regulamento').show('slow');
				$('.video').css('visibility','hidden');
	});	
	$('.box-regulamento').click(function() {
       			$('.box-regulamento').hide('slow');
				$('.video').css('visibility','visible');
	});
	
	
});