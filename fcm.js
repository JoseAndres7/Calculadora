/**Crea un programa que solicite al usuario su edad y su sexo y devuelva la frecuencia cardiaca máxima por pantalla (en el cuerpo de la página).
Además,  indicará los siguientes valores:
Zona de recuperación (60% - 70%).
Zona aeróbica (70% - 80%).
Zona anaeróbica (80% - 90%).
Lı́nea roja (90% - 100%).

Además, comprobará que no se meta ningún valor incorrecto de edad y sexo, y en caso de que ası́ sea, volverá a solicitar los datos. */
function fcm(){
    var edad = prompt("Introduce tu edad");
    var sexo = prompt("Introduce tu sexo (H/M)");
    if(edad > 0 && (sexo == "H" || sexo == "M")){
        var frecuencia = 220 - edad;
        document.write("Tu frecuencia cardiaca máxima es: " + frecuencia);
        document.write("Zona de recuperación (60%-70%): " + frecuencia * 0.6 + "-" + frecuencia * 0.7);
        document.write("Zona aeróbica (70%-80%): " + frecuencia * 0.7 + "-" + frecuencia * 0.8);
        document.write("Zona anaeróbica (80%-90%): " + frecuencia * 0.8 + "-" + frecuencia * 0.9);
        document.write("Lı́nea roja (90%-100%): " + frecuencia * 0.9 + "-" + frecuencia * 1);
    }else{
        document.write("Los valores introducidos no son correctos");
    }
}