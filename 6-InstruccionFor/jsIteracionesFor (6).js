function mostrar()
{

var nunero;
var contador = 0;

numero = parseInt(prompt("Ingrese un numero:"));

while (isNaN(numero) || numero < 1) {
    numero = parseInt(prompt("Dato invalido.Ingrese un numero:"));
}

for(var contador;contador <= numero;contador++){

    if (contador % 2 == 0) {
    console.log("contador");
    contadorPares++;
    }
}

console.log("Cantidad de pares: " + contadorPares);



}//FIN DE LA FUNCIÓN