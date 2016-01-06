

function escreve() {
	var text = "";
	for (var i = 0; i < 5; i++) {
		text += "numero" + i  + "</br>"; 
	}

	document.getElementById("demo").innerHTML = text;
}

function cal() {


	var dados = document.getElementById("formulario");
	var massa = +dados.massa.value;
	var metros = +dados.metros.value;
	var cm = +dados.cm.value;

	var altura = (metros * 100 + cm) / 100;
	

	var IMC = massa / (altura * altura) ;

	formulario.imc.value = IMC.toFixed(2);

}