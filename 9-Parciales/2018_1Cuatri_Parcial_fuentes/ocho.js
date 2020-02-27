function mostrar()
{
    var letra;
    var numero;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var acumuladorPositivos = 0;
    var acumuladorNegativos = 0;
    var mayor;
    var menor;
    var letraMayor;
    var letraMenor;
    var flag = 0;
    var contador = 0;
    var seguir;
    var promedioPos;

    do {
        letra = prompt("Ingrese una letra: ");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Eso no es una letra. Ingrese una letra: ");
        }
        numero = parseInt(prompt("Ingrese un numero entre -100 y 100: "));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Dato invalido. Ingrese un numero entre -100 y 100: "));
        }
        // me fijo por la paridad
        if (numero % 2 == 0) {
            contadorPares++;
        }
        else {
            contadorImpares++;
        }
        // me fijo por el signo
        if (numero > 0) {
            acumuladorPositivos = acumuladorPositivos + numero;
            contador++;
        }
        else if (numero < 0) {
            acumuladorNegativos = acumuladorNegativos + numero;
        }
        else {
            contadorCeros++;
        }
        // busco maximos y minimos
        if (numero > mayor || flag == 0) {
            mayor = numero;
            letraMayor = letra;
        }

        if (numero < menor || flag == 0) {
            menor = numero;
            letraMenor = letra;
            flag = 1;
        }


        seguir = prompt("Quiere continuar?: ");
    } while (seguir == 's');

    promedioPos = acumuladorPositivos / contador;

    // mostrar los datos

    document.write("a) La cantidad de números pares: " + contadorPares + "</br>");
    document.write("b) La cantidad de números impares: " + contadorImpares + "</br>");
    document.write("c) La cantidad de ceros: " + contadorCeros + "</br>");
    document.write("d) El promedio de todos los números positivos ingresados: " + promedioPos + "</br>");
    document.write("e) La suma de todos los números negativos: " + acumuladorNegativos + "</br>");
    document.write("f) Numero maximo: " + mayor + " Letra: " + letraMayor + "</br>");
    document.write("f) Numero minimo: " + menor + " Letra: " + letraMenor + "</br>");
}