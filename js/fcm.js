/**Crea un programa que solicite al usuario su edad y su sexo y devuelva la frecuencia cardiaca máxima por pantalla (en el cuerpo de la página).
Además,  indicará los siguientes valores:
Zona de recuperación (60% - 70%).
Zona aeróbica (70% - 80%).
Zona anaeróbica (80% - 90%).
Lı́nea roja (90% - 100%).

Además, comprobará que no se meta ningún valor incorrecto de edad y sexo, y en caso de que ası́ sea, volverá a solicitar los datos. */

function fcm() {
    // Cogemos el valor insertado por parametro en el input que tenemos en el html llamado "años".
    let anios = parseInt(document.getElementById("años").value);

    // Cogemos el valor insertado por parametro en el input que tenemos en el html llamado "sexo".
    let sexo = document.getElementById("sexo").value;

    // Cogemos el span con id "valores" que tenemos en el html para luego insertarle texto.
    let valores = document.getElementById("valores");

    //Comprobamos que los valores introducidos en anios sean numeros mayores del 0 y que el valor introducido en sexo sea igual a H.
    if (anios !="" && sexo =="H") {

        //En caso de que sea correcto, calculamos la frecuencia cardiaca maxima.
        let frecuencia = 220 - anios;

        //Insertamos en el html los siguientes valores.
        valores.innerHTML =("Tu frecuencia cardiaca máxima es: " + frecuencia) + "<br>" +
            ("Zona de recuperación (60%-70%): " + (frecuencia * 0.6).toFixed(0) + "-" + (frecuencia * 0.7).toFixed(0)) + "<br>" +
            ("Zona aeróbica (70%-80%): " + (frecuencia * 0.7).toFixed(0) + "-" + (frecuencia * 0.8).toFixed(0)) + "<br>" +
            ("Zona anaeróbica (80%-90%): " + (frecuencia * 0.8).toFixed(0) + "-" + (frecuencia * 0.9).toFixed(0)) + "<br>" +
            ("Línea roja (90%-100%): " + (frecuencia * 0.9).toFixed(0) + "-" + frecuencia * 1);

    //Comprobamos que los valores introducidos en anios sean numeros mayores del 0 y que el valor introducido en sexo sea igual a M.
    }else if(anios !="" && sexo =="M"){

        //En caso de que sea correcto, calculamos la frecuencia cardiaca maxima.
        let frecuencia = 226 - anios;

        //Insertamos en el html los siguientes valores.
        valores.innerHTML =("Tu frecuencia cardiaca máxima es: " + frecuencia) + "<br>" +
            ("Zona de recuperación (60%-70%): " + (frecuencia * 0.6).toFixed(0) + "-" + (frecuencia * 0.7).toFixed(0)) + "<br>" +
            ("Zona aeróbica (70%-80%): " + (frecuencia * 0.7).toFixed(0) + "-" + (frecuencia * 0.8).toFixed(0)) + "<br>" +
            ("Zona anaeróbica (80%-90%): " + (frecuencia * 0.8).toFixed(0) + "-" + (frecuencia * 0.9).toFixed(0)) + "<br>" +
            ("Línea roja (90%-100%): " + (frecuencia * 0.9).toFixed(0) + "-" + frecuencia * 1);
    } else {
        valores.innerHTML = ("<b>Los valores introducidos no son correctos</b>");
    }
}

//Con este metodo al hacer click borramos wl texto insertado en la anterior funcion.
function fcmOcultar() {
    let valores = document.getElementById("valores");
    valores.innerHTML = "";
}