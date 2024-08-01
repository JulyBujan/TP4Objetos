class Persona {
    constructor(param_nombre, param_edad, param_profesion) {
      this.nombre = param_nombre;
      this.edad = param_edad;
      this.profesion = param_profesion;
    
    }
    saludar(){
        
        document.write(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}<br>`);
    }
    despedirse(){
        
        document.write(`${this.nombre} se despide.<br>`);
    }
}

let persona1 = new Persona("Samuel",37,"Pintor");
persona1.saludar();
persona1.despedirse();

let persona2 = new Persona("Simón",39,"Bailarin");
persona2.saludar();
persona2.despedirse();