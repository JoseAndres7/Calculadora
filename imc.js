/**Crea un programa que solicite al usuario sus centı́metros y el peso en kg y devuelva el indice de Masa Corporal escrito en la pantalla (en el cuerpo de la página).

Además de mostrar el resultado,mostrará la siguiente escala la clasiCicación: 
<16.00: Infrapeso (delgadez severa)
16.00 –16.99: Infrapeso (delgadez moderada)
17.00 -18.49: Infrapeso (delgadez aceptable)
18.50 -24.99: Peso normal
25.00 -29.99: Sobrepeso
30.00 -34.99: Obeso (Tipo I)
5.00 -40.00: Obeso (Tipo II)
>40.00: Obeso (Tipo III)

Además, comprobará que no se meta ningún valor incorrecto de peso ni altura, y en caso de que ası́ sea, volverá a solicitar los datos. */

function imc(){
    var peso = prompt("Introduce tu peso en kg");
    var altura = prompt("Introduce tu altura en cm");
    if(peso > 0 && altura > 0){
        var imc = peso / (altura * altura);
        document.write("Tu IMC es: " + imc);
        if(imc < 16){
            document.write("Infrapeso(delgadez severa)");
        }else if(imc < 17){
            document.write("Infrapeso(delgadez moderada)");
        }else if(imc < 18.5){
            document.write("Infrapeso(delgadez aceptable)");
        }else if(imc < 25){
            document.write("Pesonormal");
        }else if(imc < 30){
            document.write("Sobrepeso");
        }else if(imc < 35){
            document.write("Obeso(Tipo I)");
        }else if(imc < 40){
            document.write("Obeso(Tipo II)");
        }else{
            document.write("Obeso(Tipo III)");
        }
    }else{
        document.write("Los valores introducidos no son correctos");
    }
}