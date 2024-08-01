// Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.//
class Auto {
    constructor(param_color, param_marca, param_modelo) {
      this.color = param_color;
      this.marca = param_marca;
      this.modelo = param_modelo;
      this.encendido = false;
    }
    encender(){
        this.encendido = true;
        document.write(`El auto ${this.marca} ${this.modelo} está encendido.<br>`);
    }
    apagar(){
        this.encendido = false;
        document.write(`El auto ${this.marca} ${this.modelo} está apagado.<br>`);
    }
}

let Objeto = new Auto("Azul","Jeep","Renegade");
Objeto.encender();
Objeto.apagar();