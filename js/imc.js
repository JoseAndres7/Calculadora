/**Crea un programa que solicite al usuario sus centı́metros y el peso en kg y devuelva el Indice de Masa Corporal escrito en la pantalla (en el cuerpo de la página).

Además de mostrar el resultado, mostrará la siguiente escala la clasificación: 
<16.00: Infrapeso (delgadez severa)
16.00 –16.99: Infrapeso (delgadez moderada)
17.00 -18.49: Infrapeso (delgadez aceptable)
18.50 -24.99: Peso normal
25.00 -29.99: Sobrepeso
30.00 -34.99: Obeso (Tipo I)
5.00 -40.00: Obeso (Tipo II)
>40.00: Obeso (Tipo III)

Además, comprobará que no se meta ningún valor incorrecto de peso ni altura, y en caso de que ası́ sea, volverá a solicitar los datos. */

function imc() {
    let peso = parseInt(document.getElementById("peso").value);
    let altura = parseInt(document.getElementById("altura").value) / 100;
    let imc = document.getElementById("imc");
    let lectura = document.getElementById("lectura");

    if (peso >= 0 && altura >= 0) {
        let imctotal = (peso / (altura * altura));
        imcredondeado = Number(imctotal.toFixed(2));
        imc.innerHTML = "Tu IMC es: " + imcredondeado;
        lectura.innerHTML = "<br>" + "Tu clasificación es: ";

        if (imctotal < 16) {
            lectura.innerHTML += "Infrapeso(delgadez severa)";
        } else if (imctotal < 17) {
            lectura.innerHTML += "Infrapeso(delgadez moderada)";
        } else if (imctotal < 18.5) {
            lectura.innerHTML += "Infrapeso(delgadez aceptable)";
        } else if (imctotal < 25) {
            lectura.innerHTML += "Peso Normal";
        } else if (imctotal < 30) {
            lectura.innerHTML += "Sobrepeso";
        } else if (imctotal < 35) {
            lectura.innerHTML += "Obeso(Tipo I)";
        } else if (imctotal < 40) {
            lectura.innerHTML += "Obeso(Tipo II)";
        } else {
            lectura.innerHTML += "Obeso(Tipo III)";
        }
    } else {
        lectura.innerHTML += "Los valores introducidos no son correctos";
    }
}

function imcOcultar() {
    let imc = document.getElementById("imc");
    let valores = document.getElementById("lectura");
    imc.innerHTML = "";
    valores.innerHTML = "";
}