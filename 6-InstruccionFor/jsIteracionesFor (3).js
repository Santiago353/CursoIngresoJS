function mostrar()
{

var repeticiones = prompt("ingrese el número de repeticiones");

while (isNaN(repeticiones) || repeticiones <1){
    repeticiones = parseInt(prompt("Dato invalido.Ingrese el numero de repeticiones"))
}

for(var contador =1;contador <= repeticiones;contador++){
   console.log("Hola UTN-FRA" + contador);
}

}//FIN DE LA FUNCIÓN