/**Crea un programa que solicite al usuario su edad y su sexo y devuelva la frecuencia cardiaca máxima por pantalla (en el cuerpo de la página).
Además,  indicará los siguientes valores:
Zona de recuperación (60% - 70%).
Zona aeróbica (70% - 80%).
Zona anaeróbica (80% - 90%).
Lı́nea roja (90% - 100%).

Además, comprobará que no se meta ningún valor incorrecto de edad y sexo, y en caso de que ası́ sea, volverá a solicitar los datos. */
function fcm() {
    var anios = parseInt(document.getElementById("años").value);
    var sexo = parseInt(document.getElementById("sexo").value);
    var valores = document.getElementById("valores");
    if (anios != "" && sexo != "") {
        var frecuencia = 220 - anios;
        valores.innerHTML = "<br>" + ("Tu frecuencia cardiaca máxima es: " + frecuencia) + "<br><br>" +
            ("Zona de recuperación (60%-70%): " + (frecuencia * 0.6).toFixed(0) + "-" + (frecuencia * 0.7).toFixed(0)) + "<br><br>" +
            ("Zona aeróbica (70%-80%): " + (frecuencia * 0.7).toFixed(0) + "-" + (frecuencia * 0.8).toFixed(0)) + "<br><br>" +
            ("Zona anaeróbica (80%-90%): " + (frecuencia * 0.8).toFixed(0) + "-" + (frecuencia * 0.9).toFixed(0)) + "<br><br>" +
            ("Línea roja (90%-100%): " + (frecuencia * 0.9).toFixed(0) + "-" + frecuencia * 1) + "<br><br>";
    } else {
        valores.innerHTML = ("Los valores introducidos no son correctos");
    }
}