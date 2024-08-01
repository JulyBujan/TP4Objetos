class Persona{
    constructor(nombre,edad,sexoHM,pesoKG,alturaCM,nacimiento19XX){
        this.nombre=nombre;
        this.edad=parseInt(edad);
        this.sexo=sexoHM;
        this.peso=parseFloat(pesoKG);
        this.altura=parseInt(alturaCM);
        this.nacimiento = nacimiento19XX;
        this.dni = this.generarDNI();
    }
    mostrarGeneracion(){
        if(1929<this.nacimiento && this.nacimiento<2011) {
            if(this.nacimiento<=1948){
                document.write(`${this.nombre} pertenece a Silent Generation y su rasgo caracterìstico es la Austeridad<br>`);
            }
            if(1949<=this.nacimiento && this.nacimiento<=1968){
                document.write(`${this.nombre} pertenece a Baby Boom y su rasgo caracterìstico es la Ambición<br>`);
            }
            if(1969<=this.nacimiento && this.nacimiento<=1980){
                document.write(`${this.nombre} pertenece a GenerationX y su rasgo caracterìstico es la Obseción por el éxito<br>`);
            }
            if(1981<=this.nacimiento && this.nacimiento<1993){
                document.write(`${this.nombre} pertenece a Millenials y su rasgo caracterìstico es la Frustración<br>`);
            }
            if(1994<=this.nacimiento){
                document.write(`${this.nombre} pertenece a GeneraciónZ y su rasgo caracterìstico es la Irreverencia<br>`);
            }
        } else {
            document.write("El valor está fuera de rango");
        }
    }
    esMayorDeEdad(){
        return this.edad>18;
    }
    mostrarDatos(){
        return `<p>Nombre: ${this.nombre}<br>Edad: ${this.edad}<br>DNI: ${this.dni}<br>Sexo: ${this.sexo}<br>Peso: ${this.peso} Kgr.<br>Altura: ${this.altura} cm.<br>Año de nacimiento: ${this.nacimiento} `;
    }
    generarDNI(){
        return Math.round(Math.random()*100000000);
    }
}

let persona1 = new Persona('Sergio',42,"H",93,187,1982);
persona1.mostrarGeneracion();

if(persona1.esMayorDeEdad()){
    document.write("Es mayor de edad.");
} else{
    document.write("Es menor de edad.");
}

document.write(persona1.mostrarDatos());