//DOM (La ramificación del documento HTML,XML,etc)
//Tenes que modificar el HTML para ir probando las distintas funciones que se van a ver acá.

//Document - Metodos de Selección de elementos
let h1 = document.getElementById("idH1");
document.write(h1);

document.write("</br>")

let parrafoVar = document.getElementsByTagName("parrafo");
document.write(parrafoVar);

document.write("</br>")

let negrita = document.querySelector(".marcado");
document.write(negrita);