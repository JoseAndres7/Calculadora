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
    // Cogemos el valor insertado por parametro en el input que tenemos en el html llamado "peso".
    let peso = parseInt(document.getElementById("peso").value);
    
    // Cogemos el valor insertado por parametro en el input que tenemos en el html llamado "altura".
    let altura = parseInt(document.getElementById("altura").value) / 100;
    
    // Cogemos el span con id "imc" que tenemos en el html para luego insertarle texto.
    let imc = document.getElementById("imc");

    // Cogemos el span con id "clasificacion" que tenemos en el html para luego insertarle texto.
    let clasificacion = document.getElementById("clasificacion");

    //Comprobamos que los valores introducidos en peso y altura sean numeros mayores del 0.
    if (peso >= 0 && altura >= 0) {
        let imctotal = (peso / (altura * altura));
        imcredondeado = Number(imctotal.toFixed(2));
        imc.innerHTML = "Tu IMC es: " + imcredondeado;


        clasificacion.innerHTML = "<br>" + "<b>Tu clasificación es:</b>";

        //Creamos una variable para meterle todo el texto que luego insertamos en el html.
        html ="";

        //Dependiendo de la media calculada en imctotal, mostraremos un mensaje u otro.
        if(imctotal < 16) {
            html += ("<br>" + "<b>Infrapeso (delgadez severa)</b>");
        }else{
            html += ("<br>" + "Infrapeso (delgadez severa)");
        }
        if(imctotal >= 16 && imctotal < 17) {
            html += ("<br>" + "<b>Infrapeso (delgadez moderada)</b>");
        }else{
            html += ("<br>" + "Infrapeso (delgadez moderada)");
        }
        if(imctotal >= 17 && imctotal < 18.5) {
            html += ("<br>" + "<b>Infrapeso (delgadez aceptable)</b>");
        }else{
            html += ("<br>" + "Infrapeso (delgadez aceptable)");
        }
        if(imctotal >= 18.5 && imctotal < 25) {
            html += ("<br>" + "<b>Peso normal</b>");
        }else{
            html += ("<br>" + "Peso normal");
        }
        if(imctotal >= 25 && imctotal < 30) {
            html += ("<br>" + "<b>Sobrepeso</b>");
        }else{
            html += ("<br>" + "Sobrepeso");
        }
        if(imctotal >= 30 && imctotal < 35) {
            html += ("<br>" + "<b>Obeso (Tipo I)</b>");
        }else{
            html += ("<br>" + "Obeso (Tipo I)");
        }
        if(imctotal >= 35 && imctotal < 40) {
            html += ("<br>" + "<b>Obeso (Tipo II)</b>");
        }else{
            html += ("<br>" + "Obeso (Tipo II)");
        }
        if(imctotal >= 40) {
            html += ("<br>" + "<b>Obeso (Tipo III)</b>");
        }else{
            html += ("<br>" + "Obeso (Tipo III)");
        }

        //Insertamos el texto en el html.
        clasificacion.innerHTML += html;
        
    } else {
        clasificacion.innerHTML += "<b>Los valores introducidos no son correctos</b>";
    }
}

//Con este metodo al hacer click borramos wl texto insertado en la anterior funcion.
function imcOcultar() {
    let imc = document.getElementById("imc");
    let valores = document.getElementById("clasificacion");
    imc.innerHTML = "";
    valores.innerHTML = "";
}