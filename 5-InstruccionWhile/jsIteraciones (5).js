function mostrar() {

    var sexo = prompt("ingrese f ó m .");

    while (sexo != "f" && sexo != "m") {

        sexo = prompt("Error.ingrese un número entre f 0 m.");
    }

    document.getElementById('Sexo').value = sexo;


}//FIN DE LA FUNCIÓN