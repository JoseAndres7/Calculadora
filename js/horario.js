/**Crea un programa que genere dos tablas html  con los horarios de la asociación.
Habrá una tabla de horario de mañana que muestre las horas de dos en dos con el formato 9:00-11:00, desde las 9 hasta las 15:00 y los dı́as del lunes al viernes.
Habrá otra tabla de horario de tarde que muestre las horas de una en una con el formato 16:00-17:00, desde las 16 hasta las 21:00 y los dı́as del lunes al domingo.
Tanto las horas como los dı́as (es decir, la primera columna y la primera fila) tendrán etiqueta th. El resto tendrán etiqueta td. */
function horarioManana() {
    var valores = document.getElementById("tabla1");
    let html = "";
    html += "<h1>Horario Mañana</h1>";
    html += "<table border='1'>";
    html += "<tr><th></th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th></tr>";
    for (var i = 9; i < 15; i++) {
        html += "<tr>";
        html += "<th>" + i + ":00-" + (i + 2) + ":00</th>";
        for (var j = 0; j < 5; j++) {
            html += "<td></td>";
        }
        html += "</tr>";
        i++;
    }
    html += "</table><br><br>";
    valores.innerHTML = html;
}

function horarioTarde() {
    var valores = document.getElementById("tabla1");
    let html = "";
    html += "<h1>Horario Tarde</h1>";
    html += "<table border='1'>";
    html += "<tr><th></th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th><th>Sabado</th><th>Domingo</th></tr>";
    for (var i = 16; i < 21; i++) {
        html += "<tr>";
        html += "<th>" + i + ":00-" + (i + 1) + ":00</th>";
        for (var j = 0; j < 7; j++) {
            html += "<td></td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    valores.innerHTML = html;
}

function horarioOcultar() {
    var valores = document.getElementById("tabla1");
    valores.innerHTML = "";
}