// JavaScript Document

var contentHeight = 0;
var minWidth = 783;
var minWidthMiddle = 514;

function resizer() {

	// Width Variables
	var X = document.documentElement.offsetWidth;
	if (navigator.appName == "Microsoft Internet Explorer") {
		X = (document.documentElement.offsetWidth-16);
	}
	if (X < minWidth) {
		X = minWidth;
		XMiddle = minWidthMiddle;
	} else {
		XMiddle = (X-269);		
	}
	
	// Height Variables

	var scrollHeight = document.documentElement.offsetHeight;
	var contentHeight = document.body.offsetHeight;

	var Y = scrollHeight;
	if (contentHeight > scrollHeight) {
		Y = contentHeight;
	}

	// Resizing Elements
	if (document.getElementById('middle')) {
		if (contentHeight < scrollHeight) {
			document.getElementById('middle').style.height=(Y-93)+"px";
		}
		document.getElementById('middle').style.width=XMiddle+"px";
	}
	
	if (document.getElementById('menubottom')) {
		document.getElementById('left').style.height=Y+"px";
	}
	
	if (document.getElementById('copyright')) {
		document.getElementById('copyright').style.width=XMiddle+"px";
	}
	
	if (document.getElementById('waiting')) {
		document.getElementById('waiting').style.height=Y+"px";
		document.getElementById('waiting').style.width=X+"px";
	}

	if (document.getElementById('waitingcontent')) {
		document.getElementById('waitingcontent').style.top=((Y/2)-150)+"px";
		document.getElementById('waitingcontent').style.left=((X/2)-180)+"px";
	}
	
	if (document.getElementById('news_background')) {
		var contentHeight = document.body.offsetHeight;
		document.getElementById('news_background').style.height=contentHeight+"px";
		document.getElementById('news_background').style.width=X+"px";
	}	

}