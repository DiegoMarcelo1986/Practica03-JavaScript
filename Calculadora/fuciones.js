// JavaScript Document
var numero1=0;
var numero2=0;
var operacion="";
var dpunto="";
function enviar(numero){
		var respuesta = document.getElementById("resultado");
		if(respuesta != null){
			respuesta.value += numero;
			
		}
	}
function suma(){
	numero1 = document.getElementById("resultado").value;
	operacion = "+";
	limpiar();
}
function resta(){
	numero1 = document.getElementById("resultado").value;
	operacion = "-";
	limpiar();
}
function multi(){
	numero1 = document.getElementById("resultado").value;
	operacion = "*";
	limpiar();
}
function divi(){
	numero1 = document.getElementById("resultado").value;
	operacion = "/";
	limpiar();
}
function modulo(){
	numero1 = document.getElementById("resultado").value;
	operacion = "%";
	limpiar();
}
function exponente(){
	numero1 = document.getElementById("resultado").value;
	operacion = "^";
	limpiar();
}
function valigual(){
	numero2 = document.getElementById("resultado").value;
	resolver();
}
function limpiar(){
	resultado.value = "";
}
function resetear(){
	resultado.value = "";
	numero1 = 0;
	numero2 = 0;
	operacion = "";
}

function darPunto(){
	var punto= document.getElementById("resultado").value;
    	if(punto == "") {
    		document.getElementById('resultado').value="0.";
    	}else if(punto!=0){
    		document.getElementById('resultado').value=punto+=".";
    	}
}
function borrarR(){
	var borrar= document.getElementById("resultado").value;
	var tam=borrar.length;
	var t=borrar.substring(0, tam-1);
	document.getElementById('resultado').value=t;
}

function resolver(){
	var respuesta=0;
	switch(operacion){
		case "+":
			respuesta = parseFloat(numero1) + parseFloat(numero2);
			break;
		case "-":
			respuesta = parseFloat(numero1) - parseFloat(numero2);
			break;
		case "*":
			respuesta = parseFloat(numero1) * parseFloat(numero2);
			break;
		case "/":
			respuesta = parseFloat(numero1) / parseFloat(numero2);			
			break;
		case "%":
			respuesta = parseFloat(numero1) % parseFloat(numero2);
			break;
		case "^":
			respuesta = Math.pow(parseFloat(numero1), parseFloat(numero2));
			break;
	}
	resetear();
	document.getElementById('resultado').value=respuesta;
}