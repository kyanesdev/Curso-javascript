
function crearLlave(nombre,modelo,precio){

    let img = "llave.png";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>$${precio}</p>`;

    return [nombre,modelo,precio,img];

}

