<!DOCTYPE HTML>
<html lang="pt-br">
   <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" type="text/css" href="css/style.css"/>
      <link rel="shortcut icon" href="imagens/favicon.ico" />
      <title>CPA Force</title>
      <script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
   </head>


    <body class="home">
   	<div class="main">
	    <header>
	     	<h1><img src="imagens/cpa-logo.png" alt="CPA Force" /></h1>
	     	<nav>
	     		<ul class="menu">
	     			<li>
	     				<a href="index.html">Home</a>
	     			</li>
	     			<li>
	     				<a href="quem-somos.html">Quem Somos</a>
	     			</li>
	     			<li>
	     				<a href="produtos.html">Produtos</a>
	     			</li>
	     			<li>
	     				<a class="selected" href="contato.php">Fale Conosco</a>
	     			</li>
	     		</ul>
	     	</nav>
	     </header>

	     <div class="clearboth"></div>

	     <section class="width-all">

		     <div class="inside">

		     	<div class="content-1" style="width:250px;">
		     		<h2>Encontre-nos</h2>
		     		<div class="subtit">Endereço</div>
		     		<div class="info">
				     		8901 Marmora Road <br />
				     		Glasgow,<br />
				     		DO4 89GR
				     </div>
				     <div class="subtit">Telefones</div>
		     		<div class="info">
			     		Freephone: +1 800 559 6580<br />
	     				Fax: +1 504 889 9898<br />
				     </div>
				     <div class="subtit">E-mail</div>
		     		<div class="info">
			     		mail@cpaforce.com
				     </div>
		     	</div>

		     	<div class="content-2" style="width:653px;">
		     		<h2>Mande aqui sua mensagem</h2>
		     		<form  id="form1" name="form1" method="post" action="sendmail.php">
						<input type="text" name="name" placeholder="*Seu nome aqui:" />
						<input type="text" name="mail" placeholder="*Seu e-mail aqui:" />
						<input type="text" name="tel" placeholder="*Seu telefone aqui:" />
						<textarea name="message" placeholder="*Sua mensagem aqui:"></textarea>
						<input type="submit" value="Enviar" />
						<div class="success">Sua mensagem foi enviada com sucesso!</div>
		     		</form>
		     	</div>

		     </div>

		     <div class="clearboth"></div>

	     </section>



	     <footer>
	     	<img src="imagens/cpa-logo.png" class="logo" width="176" />

	     	<div class="area">
		     	<h5><strong>Mapa do site</strong></h5>
		     	<div class="clearboth"></div>
		     	<ul>
		     		<li>
		     			<a href="index.html">&#62; Home</a>
		     		</li>
		     		<li>
		     			<a href="quem-somos.html">&#62; Quem Somos</a>
		     		</li>
		     		<li>
		     			<a href="produtos">&#62; Produtos</a>
		     		</li>
		     		<li>
		     			<a href="contato.php">&#62; Fale Conosco</a>
		     		</li>
		     	</ul>

		     	<address>
		     		PHONE: 21 98828 8222<br />
		     		<strong>E-mail: contato@cpaforce.com.br</strong>
		     	</address>
		     	<div class="clearboth"></div>
	     	</div>
	     </footer> 
	   </div>


	   <script type="text/javascript">
	   		$( document ).ready(function() {
			    console.log( "ready!" );
			});
	   </script>


   </body>
</html>