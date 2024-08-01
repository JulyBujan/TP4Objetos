class Contacto{
    constructor(nombre,telefono){
        this.nombre=nombre;
        this.telefono=telefono;
    }
}

class Agenda{
    #lista;
    #tope;
    constructor(){
        this.#lista=[];
        this.#tope=10;
    }
    aniadirContacto(fulanito){
        if(!this.existeContacto){
            if(!this.agendaLlena){
                this.#lista.push(fulanito);
            }else{
                alert("La agenda está llena.");
            }
        }
    }
    existeContacto(menganito){
        for(let i=0; i < this.#lista.length; i++){
            if(this.#lista[i] === menganito){
                return true;
            }
        }
        return false;
    }
    listarContactos(){
        let cadena = "";
        for(let i=0; i < this.#lista.length; i++){
            cadena = cadena + `<p>Nombre: ${this.#lista[i].nombre}<br>Teléfono: ${this.#lista[i].telefono}</p>`;
        }
        return cadena;
    }
    buscarContacto(nombreBusqueda){
        for(let i=0; i < this.#lista.length; i++){
            if(this.#lista[i].nombre == nombreBusqueda){
                return this.#lista[i].telefono;
            }
        }
    }
    eliminarContacto(contactoEliminar){
        for(let i=0; i < this.#lista.length; i++){
            if(this.#lista[i] === contactoEliminar){
                if(this.#lista.splice(i,1).length=1){
                    document.write("<p>El contacto se ha eliminado.</p>");
                }     
            }
        }
    }
    agendaLlena(){
        return this.#lista.length == this.#tope ;
    }
    huecosLibres(){
        return this.#tope - this.#lista;
    }
}

