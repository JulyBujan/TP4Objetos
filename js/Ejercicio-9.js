class Animal {
  constructor(param_nombre, param_edad) {
    this.nombre = param_nombre;
    this.edad = param_edad;
  }
  emitirSonido() {
    console.log('Sonido');
   }
}

class Perro extends Animal {
  emitirSonido() {
    document.write(`${this.nombre} dice Guau! <br>`);
  }
}

class Gato extends Animal {
  emitirSonido() {
    document.write(`${this.nombre} dice Miau! <br>`);
  }
}

let perrito = new Perro("Amorina", 4);
perrito.emitirSonido();

let gatito = new Gato("Geovanni", 8);
gatito.emitirSonido();
