//La historia de cofla Capitulo 3
//Programacion orientada a objetos

class Celular{

    constructor(color,peso,resolucionPantalla,camara,memoriaRAM){

        this.color=color;
        this.peso=peso;
        this.resolucionPantalla=resolucionPantalla;
        this.camara=camara;
        this.memoriaRAM=memoriaRAM;
        this.prendido=null;
        
    }

    
    set setColor(color){

        this.color=color;

    }

    set setPeso(peso){

        this.peso=peso;

    }

    set setResolucionPantalla(resolucionPantalla){

        this.resolucionPantalla=resolucionPantalla;

    }

    set setCamara(camara){

        this.camara=camara;

    }

    set setMemoriaRAM(memoriaRAM){

        this.memoriaRAM=memoriaRAM;

    }


    get getColor(){
        
        return this.color;

    }


    get getPeso(){
        
        return this.peso;

    }

    get getReosolucionPantalla(){
        
        return this.resolucionPantalla;

    }

    get getCamara(){
        
        return this.camara;

    }

    get getMemoriaRAM(){
        
        return this.memoriaRAM;

    }

    prenderCelular(){

        if(this.prendido == null){

            alert("Prendiendo celular");
            document.write(`</br>El celular está prendido</br>`);
        }

    }




}


let celular1 = new Celular();

celular1.setColor= "Rojo";

document.write(celular1.getColor);
celular1.prenderCelular();


console.log(celular1.getColor);

