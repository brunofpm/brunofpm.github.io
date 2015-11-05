// JavaScript Document
$(window).load(function(){
	// escondendo dropdown
	$('div#master div#header div#header-1-2 div#hForm div#wrap_dropdown').fadeOut();
	// Header DropDown
	$('div#header-1-2 div#hForm div#input_select_bt').click(function(){
		$('div#master div#header div#header-1-2 div#hForm div#wrap_dropdown')
			.slideToggle(800);
	});
});

$(document).ready(function(){
	// Box Header Login
	// .click() no hLogon
	$('div#master div#header div#header-1-2 div#hLogbox1-2 p a.logon')
	.click(function(){
		$(this).fadeOut(500);
		$('div#master div#header div#header-1-2 div#hLogbox1-2 p span.pipe, div#master div#header div#header-1-2 div#hLogbox1-2 p a.cadastrar').fadeOut(500);
		$('div#master div#header div#header-1-2 div#hLogbox1-1').slideDown(1000);
		$('div#master div#header div#header-1-2 div#hLogbox1-2')
			.animate({ 
				marginTop:"+=130px"
			}, 1000 );
		$('div#master div#header div#header-1-2 div#hLogbox1-1 #hLogbox1-1-1').fadeIn(2000);
		$('div#master div#header div#header-1-2 div#hLogbox1-2 p a.cadastrar').fadeIn(1000);
	})//fim .click Logon
	

//hover do li
	$('div#header-1-2 div#hForm ul#dropdown li')
	.hover(
		function () {
			$(this).css('background-color','#5b4d38');
		}, 
		function () {
			$(this).css('background','none');
	});
	// click no li
	$('div#master div#header div#header-1-2 div#hForm ul#dropdown li').click(function(){
		var selectCidade = $(this).attr("id");
		//alert(selectCidade);		
		$('div#hForm input#input_select').val(selectCidade);
		$('div#master div#header div#header-1-2 div#hForm div#wrap_dropdown')
			.slideUp(800);
	});
	
	// GALERIA IMG DESTAQUE DA HOME
	$('div#content-1.home #content-1-1 #dImage #thumbs .item').click(function(){
		var srcimgDestaque = $(this).find("img").attr("src");
		//alert(srcimgDestaque);
		//alert(hrefimgDestaque);
		
		$('div#content-1.home #content-1-1 #dImage #destaque *').fadeOut(800);
		
		$('div#content-1.home #content-1-1 #dImage #destaque')
		.html(
		"<img src="+srcimgDestaque+" class='newfadeIn' />"
		);
		
		$('div#content-1.home #content-1-1 #dImage #destaque img.newfadeIn').fadeIn(1200);
	})
	

	
});//fim ready