                                                                     
                                                                     
                                                                     
                                             
<!-- OAS SETUP -->
	<!--
	
		//configuration 7
					
		OAS_version = 11;
		OAS_url = 'http://ads.globo.com/RealMedia/ads/';
		OAS_sitepage = '../index.html';
		OAS_listpos = 'Position2,Position3,Right,Right2,Frame1';
		// Varifica se lista foi setada no layout
		if (typeof OAS_listposLayout != 'undefined') {
			OAS_listpos = OAS_listposLayout;
		}
		OAS_query = '';
		OAS_target = '_blank';
		OAS_rn = '001234567890'; OAS_rns = '1234567890';
		OAS_rn = new String (Math.random()); OAS_rns = OAS_rn.substring (2, 11);
				
		//end of configuration	
	
		
			function OAS_NORMAL(pos) {
				document.write('<A HREF="' + OAS_url + 'click_nx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + '?' + OAS_query + '" TARGET=' + OAS_target + '>');
			  	document.write('<IMG SRC="' + OAS_url + 'adstream_nx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + '?' + OAS_query + '" BORDER=0></A>');
			}
	
			function OAS_AD(pos) {
				if (OAS_listpos.search(pos) == -1) {
					return;
				}
				if (OAS_version >= 11) {
					OAS_RICH(pos); 
				} else { 
					OAS_NORMAL(pos); 
				}
			}

			var oas_print_flag = 0;
			function OAS_PrintGLB() {
				if (oas_print_flag == 0) {
					oas_print_flag = 1;
					if (OAS_version >= 11)
					  document.write('<script type="text/javascript" language="Javascript1.1" SRC="' + OAS_url + 'adstream_mjx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '?' + OAS_query + '"><\/script>');
				}	 
			}
		
	//-->	

<!-- /OAS SETUP end -->
