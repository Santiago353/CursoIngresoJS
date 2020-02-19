function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;

	var seguir;
	do {
	   numero = parseInt(prompt("ingese un numero:"));

	   acumulador = acumulador + numero;
	   contador++;

	   respuesta = parseInt(prompt("Quiere ingresar otro numero?"));


	} while (respuesta == "s");

	promedio = acumulador / contador;




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN