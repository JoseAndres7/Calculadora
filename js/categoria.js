/**Crea un programa que solicite al usuario su año de nacimiento y devuelve la categorı́a a la que pertenece.
Para ello, además de mostrar su resultado, mostrará un listado con las categorı́as que existen (desde Micros hasta Senior)
marcando la del usuario de alguna manera especial (negrita, subrayado, color...). */

function categoria() {
    // Cogemos el valor insertado por parametro en el input que tenemos en el html llamado "peso".
    let anio = parseInt(document.getElementById("año").value);

    // Cogemos el span con id "clasificacion" que tenemos en el html para luego insertarle texto.
    let valores = document.getElementById("categoria");

    //Creamos una variable para meterle todo el texto que luego insertamos en el html.
    let insert="";

    //Comprobamos que los valores introducidos en anio sean numeros mayores del 0.
    if (anio > 0) {
        let edad = 2022 - anio;

        //Dependiendo de la edad, añadiremos el texto normal o en negrita un mensaje u otro.
        if (edad < 6) {
            insert += ("<b>Micros</b>");
        }else{
            insert += ("Micros");
        }
        if (edad >= 6 && edad < 8) {
            insert += ("<br>" + "<b>Prebenjamin</b>");
        }else{
            insert += ("<br>" + "Prebenjamin");
        }
        if (edad >= 8 && edad < 10) {
            insert += ("<br>" + "<b>Benjamin</b>");
        }else{
            insert += ("<br>" + "Benjamin");
        }
        if (edad >= 10 && edad < 12) {
            insert += ("<br>" + "<b>Alevin</b>");
        }else{
            insert += ("<br>" + "Alevin");
        }
        if (edad >= 12 && edad < 14) {
            insert += ("<br>" + "<b>Infantil</b>");
        }else{
            insert += ("<br>" + "Infantil");
        }
        if (edad >= 14 && edad < 16) {
            insert += ("<br>" + "<b>Cadete</b>");
        }else{
            insert += ("<br>" + "Cadete");
        }
        if (edad >= 16 && edad < 19) {
            insert += ("<br>" + "<b>Juvenil</b>");
        }else{
            insert += ("<br>" + "Juvenil");
        }
        if (edad >= 19 && edad < 40) {
            insert += ("<br>" + "<b>Senior</b>");
        }else{
            insert += ("<br>" + "Senior");
        }
        if (edad >= 40) {
            insert += ("<br>" + "<b>Veterano</b>");
        }else{
            insert += ("<br>" + "Veterano");
        }

    } else {
        insert = ("<b>Los valores introducidos no son correctos</b>");
    }

    //Insertamos el texto en el html.
    valores.innerHTML = insert;
}

//Con este metodo al hacer click borramos wl texto insertado en la anterior funcion.
function categoriaOcultar() {
    let valores = document.getElementById("categoria");
    valores.innerHTML = "";
}