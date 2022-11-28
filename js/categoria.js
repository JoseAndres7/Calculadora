/**Crea un programa que solicite al usuario su año de nacimiento y devuelve la categorı́a a la que pertenece.
Para ello, además de mostrar su resultado, mostrará un listado con las categorı́as que existen (desde Micros hasta Senior)
marcando la del usuario de alguna manera especial (negrita, subrayado, color...). */
function categoria() {
    let anio = parseInt(document.getElementById("año").value);
    let valores = document.getElementById("categoria");

    let insert="";
    if (anio > 0) {
        let edad = 2022 - anio;
        if (edad < 6) {
            insert += ("<b>Micros</b>");
        }else{
            insert += ("Micros");
        }
        if (edad > 6 && edad < 8) {
            insert += ("<br>" + "<b>Prebenjamin</b>");
        }else{
            insert += ("<br>" + "Prebenjamin");
        }
        if (edad > 8 && edad < 10) {
            insert += ("<br>" + "<b>Benjamin</b>");
        }else{
            insert += ("<br>" + "Benjamin");
        }
        if (edad > 10 && edad < 12) {
            insert += ("<br>" + "<b>Alevin</b>");
        }else{
            insert += ("<br>" + "Alevin");
        }
        if (edad > 12 && edad < 14) {
            insert += ("<br>" + "<b>Infantil</b>");
        }else{
            insert += ("<br>" + "Infantil");
        }
        if (edad > 14 && edad < 16) {
            insert += ("<br>" + "<b>Cadete</b>");
        }else{
            insert += ("<br>" + "Cadete");
        }
        if (edad > 16 && edad < 19) {
            insert += ("<br>" + "<b>Juvenil</b>");
        }else{
            insert += ("<br>" + "Juvenil");
        }
        if (edad > 19 && edad < 40) {
            insert += ("<br>" + "<b>Senior</b>");
        }else{
            insert += ("<br>" + "Senior");
        }
        if (edad > 40) {
            insert += ("<br>" + "<b>Veterano</b>");
        }else{
            insert += ("<br>" + "Veterano");
        }

    } else {
        insert = ("<b>Los valores introducidos no son correctos</b>");
    }
    valores.innerHTML = insert;
}

function categoriaOcultar() {
    let valores = document.getElementById("categoria");
    valores.innerHTML = "";
}