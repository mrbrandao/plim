<!--By: isca
Curitiba/PR - 17/02/2014
++++++++
Pequeno Ajax que ira substituir o ledrpi.php
-->
<!DOCTYPE html>
<html>
<head>
<title>Blink Plim</title>
<meta charset="UTF-8" />

<script>
//Pequeno script para mudar o status da lampada
//apenas alterando o style do background da div
//Fizemos abaixo um innerHTML para chamar o bloco php com shell_exec
window.onload = function blink(){
	document.getElementById("liga").onclick = function(){
		//alert("liga");//Apenas para debug
		document.getElementById("chimage").style.backgroundPosition=("-146px 15px");	
		document.getElementById("show").innerHTML="<?php 
					$led=shell_exec('sudo /usr/share/nginx/www/led.py 24 1');
					echo $led;?>"
	}
	document.getElementById("desliga").onclick = function(){
		//alert("desliga");//Apenas para debug
		document.getElementById("chimage").style.backgroundPosition=("15px 15px");
		document.getElementById("show").innerHTML="<?php 
					$led=shell_exec('sudo /usr/share/nginx/www/led.py 24 0');
					echo $led;?>"
	}
}

</script>


<style>
div.lamp{
	width:150px;
	height: 235px;
	background-image:url('img/lamp.png');
	/*background-size: 150px 100px;*/
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: 15px 15px; 
}
</style>
</head>

<body>
<div class="lamp" id="chimage"></div>
<button id="liga" type"button" onclick="blink()" >LIGA</button>
<button id="desliga" type"button" onclick="blink()" >DESLIGA</button>
<br />
<span id="show"></span>
</body>
</html>
