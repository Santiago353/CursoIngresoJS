function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;

do{
   numero = parseInt(prompt("Ingrese un numero:"));
	while(isNaN(numero)){
         numero = parseInt(prompt("eso no es un numero.Ingrese un numero:"));

}
// me fijo el signo
if (numero >=0){
	// aca hago lo que tengo que haceer con los positivoa
	positivo = positivo + numero;

}
else {
	 // aca hago lo que tengo que hacer con los negativos
	 negativo = negativo * numero;
	 contador++;
}
respuesta = prompt("Quiere ingresar otro numero");
}while(respuesta =="s");

if(contador == 0){
	negativo = 0;
}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;



}//FIN DE LA FUNCIÓN