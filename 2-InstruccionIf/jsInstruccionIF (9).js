function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var maximo = 10;
	var minimo = 1;

	nota = Math.floor(Math.random() * ((maximo +1) - minimo) + minimo);

	alert(nota);
	

}//FIN DE LA FUNCIÓN