function mostrar()
{

	var respuesta;
	var numero;
	var maximo;
	var minimo;
	var flag =0;

	do{
		numero = parseInt(prompt("Ingrese un numero:"));
		 while(isNaN(numero));{
			  numero = parseInt(prompt("eso no es un numero.Ingrese un numero:"));	
		}
        if (flag == 0 || numero > maximo){
			maximo = numero;
		}

		if (flag == 0 || numero < minimo){
			minimo = numero;
			flag = 1;
		}

	respuesta = prompt("Quiere ingresar otro numero");
}while(respuesta =="s");


document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN