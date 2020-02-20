function mostrar()
{
	
	var numero;
	var seguir;
	var acumNegativos = 0;
	var acumPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPos;
	var promedioNeg;
	var diferencia;



	do {
		numero = parseInt(prompt("Ingrese un numero:"));
		 while(isNaN(numero));{
           numero = parseInt(prompt("eso no es un numero.Ingrese un numero:"));
	    }	  
		if (numero > 0);
		 // positivo
		 acumPositivos = acumPositivos + numero;
		 contadorPositivos++;
		 }
		 else if  (numero < 0)
		 // negativos
		 acumNegativos = acumNegativos + numero;
		 contadorNegativos++;
		}
		else {
			//cero
			contadorCeros++;
		}
		

	seguir = prompt("Quiere ingresar otro numero");
while(seguir =="s");

document.write("Suma de los negativos:" + acumuladornegativos + "</br>").
document.write("Suma de los positivos:" + acumuladorPositivos + "</br>").
document.write("Cantidad de positivos:" + contadorPositivos + "</br>").
document.write("Cantidad de negativos:" + contadorNegativos + "</br>").
document.write("Cantidad de ceros:" + contadorCeros + "</br>").
document.write("Cantidad de números pares:" + contadorPares+ "</br>").
document.write("Promedio de positivos:" + promedioPos + "</br>").
document.write("Promedios de negativos:" + promedioNeg+ "</br>")
document.write("-Diferencia entre positivos y negativos:" + diferencia)


		 
}//FIN DE LA FUNCIÓN