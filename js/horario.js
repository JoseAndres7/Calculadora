/**Crea un programa que genere dos tablas html  con los horarios de la asociación.
Habrá una tabla de horario de mañana que muestre las horas de dos en dos con el formato 9:00-11:00, desde las 9 hasta las 15:00 y los dı́as del lunes al viernes.
Habrá otra tabla de horario de tarde que muestre las horas de una en una con el formato 16:00-17:00, desde las 16 hasta las 21:00 y los dı́as del lunes al domingo.
Tanto las horas como los dı́as (es decir, la primera columna y la primera fila) tendrán etiqueta th. El resto tendrán etiqueta td. */

function horarioManana() {

    //Cogemos el span con id "tabla1" que tenemos en el html para luego insertarle texto.
    let valores = document.getElementById("tabla1");

    //Creamos una variable para meterle todo el texto que luego insertamos en el html.
    let html = "";

    //Añadimos la etiqueta table y la abrimos.
    html += "<table border='1'>";

    //Añadimos la primera fila con los dias de la semana.
    html += "<tr><th>Horario Mañana</th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th></tr>";

    //Creamos un bucle for para que nos muestre las horas de 9 a las 15 de 2 en 2 horas.
    for (let i = 9; i < 15; i+=2) {
        html += "<tr>";
        html += "<th>" + i + ":00-" + (i + 2) + ":00</th>";

        //Creamos otro bucle for para que nos muestre las columnas de los dias de la semana.
        for (let j = 0; j < 5; j++) {
            html += "<td></td>";
        }
        html += "</tr>";
    }

    //Cerramos la etiqueta table.
    html += "</table><br><br>";

    //Insertamos el texto en el html.
    valores.innerHTML = html;
}

function horarioTarde() {

    //Cogemos el span con id "tabla1" que tenemos en el html para luego insertarle texto.
    let valores = document.getElementById("tabla1");

    //Creamos una variable para meterle todo el texto que luego insertamos en el html.
    let html = "";

    //Añadimos la etiqueta table y la abrimos.
    html += "<table border='1'>";

    //Añadimos la primera fila con los dias de la semana.
    html += "<tr><th>Horario Tarde</th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th><th>Sabado</th><th>Domingo</th></tr>";

    //Creamos un bucle for para que nos muestre las horas de 16 a las 21 de 1 en 1 hora.
    for (let i = 16; i < 21; i++) {
        html += "<tr>";
        html += "<th>" + i + ":00-" + (i + 1) + ":00</th>";

        //Creamos otro bucle for para que nos muestre las columnas de los dias de la semana.
        for (let j = 0; j < 7; j++) {
            html += "<td></td>";
        }
        html += "</tr>";
    }

    //Cerramos la etiqueta table.
    html += "</table>";

    //Insertamos el texto en el html.
    valores.innerHTML = html;
}

//Con este metodo al hacer click borramos wl texto insertado en la anterior funcion.
function horarioOcultar() {
    let valores = document.getElementById("tabla1");
    valores.innerHTML = "";
}