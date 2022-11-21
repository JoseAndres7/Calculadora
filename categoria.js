/**Crea un programa que solicite al usuario su año de nacimiento y devuelve la categorı́a a la que pertenece.
Para ello, además de mostrar su resultado, mostrará un listado con las categorı́as que existen (desde Micros hasta Senior) 
marcando la del usuario de alguna manera especial (negrita, subrayado, color...). */
function categoria(){
    var anio = prompt("Introduce tu año de nacimiento");
    if(anio > 0){
        var edad = 2018 - anio;
        document.write("Tu edad es: " + edad);
        document.write("Categorias:");
        if(edad < 6){
            document.write("Micros");
        }else if(edad < 8){
            document.write("Prebenjamin");
        }else if(edad < 10){
            document.write("Benjamin");
        }else if(edad < 12){
            document.write("Alevin");
        }else if(edad < 14){
            document.write("Infantil");
        }else if(edad < 16){
            document.write("Cadete");
        }else if(edad < 18){
            document.write("Juvenil");
        }else if(edad < 40){
            document.write("Senior");
        }else{
            document.write("Veterano");
        }
    }else{
        document.write("Los valores introducidos no son correctos");
    }
}