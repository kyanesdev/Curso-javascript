
const container = document.querySelector(".flex-container");
let contador = 0;


function crearLlave(nombre,modelo,precio){

    contador++;
    let img = "<img src='llave.png' class='llave'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>${precio}</b> </p>`;

    return [nombre,modelo,precio,img];

}

const changeHidden = (number)=>{
    document.querySelector(".key-data").value=number;
}

let documentFragment = document.createDocumentFragment();

for(var i=1; i<=20 ; i++){

    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,`$${precioRandom}`);

    let div = document.createElement("DIV");
    div.tabIndex = i;
    div.addEventListener("click",()=>{changeHidden(modeloRandom)});
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave[3] + llave[0] + llave[1] + llave[2];
    documentFragment.appendChild(div);

}

container.appendChild(documentFragment);

//const llave = crearLlave("Brownien","XKEY","45");

//container.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];

