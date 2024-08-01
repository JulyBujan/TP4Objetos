class Restangulo{
    #alto;
    #ancho;
    constructor(ladoA, ladoB){
        this.#alto=ladoA;
        this.#ancho=ladoB;
    }
    set alto(paramLado) {
        this.#alto = parseInt(paramLado);
    }
    get alto(){
        return this.#alto;
    }
    set ancho(paramLado) {
        this.#ancho = parseInt(paramLado);
    }
    get ancho(){
        return this.#ancho;
    }

    perimeto(){
        return (this.#ancho + this.#alto)*2;
    }
    area(){
        return this.#ancho*this.#alto;
    }
}

let rectangulo1 = new Restangulo(2,3);
let rectangulo2 = new Restangulo(5,9);

document.write(`El primer rectangulo tiene por lados ${rectangulo1.alto} y ${rectangulo1.ancho}.<br>`);
document.write(`El perímetro del primer rectangulo es ${rectangulo1.perimeto()}.<br>`);
document.write(`El área del primer rectangulo es ${rectangulo1.area()}.<br>`);
document.write("<br>");
document.write(`El segundo rectangulo tiene por lados ${rectangulo2.alto} y ${rectangulo2.ancho}.<br>`);
document.write(`El perímetro del segundo rectangulo es ${rectangulo2.perimeto()}.<br>`);
document.write(`El área del segundo rectangulo es ${rectangulo2.area()}.<br>`);
