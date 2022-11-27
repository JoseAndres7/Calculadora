/**Crea un programa que solicite al usuario su año de nacimiento y devuelve la categorı́a a la que pertenece.
Para ello, además de mostrar su resultado, mostrará un listado con las categorı́as que existen (desde Micros hasta Senior)
marcando la del usuario de alguna manera especial (negrita, subrayado, color...). */
function categoria() {
    var anio = parseInt(document.getElementById("año").value);
    var valores = document.getElementById("categoria");
    if (anio > 0) {
        var edad = 2022 - anio;
        if (edad < 6) {
            valores.innerHTML = ("Micros");
        } else if (edad < 8) {
            valores.innerHTML = ("Prebenjamin");
        } else if (edad < 10) {
            valores.innerHTML = ("Benjamin");
        } else if (edad < 12) {
            valores.innerHTML = ("Alevin");
        } else if (edad < 14) {
            valores.innerHTML = ("Infantil");
        } else if (edad < 16) {
            valores.innerHTML = ("Cadete");
        } else if (edad < 19) {
            valores.innerHTML = ("Juvenil");
        } else if (edad < 40) {
            valores.innerHTML = ("Senior");
        } else {
            valores.innerHTML = ("Veterano");
        }
    } else {
        valores.innerHTML = ("Los valores introducidos no son correctos");
    }
}

function categoriaOcultar() {
    var valores = document.getElementById("categoria");
    valores.innerHTML = "";
}