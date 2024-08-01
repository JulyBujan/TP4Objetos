class Libro{
    #isbn;
    #titulo;
    #autor;
    #paginas;
    constructor(isbn,titulo,autor,numPaginas){
        this.#isbn=parseInt(isbn);
        this.#titulo=titulo;
        this.#autor=autor;
        this.#paginas=parseInt(numPaginas);
    }
    get isbn(){
        return this.#isbn;
    }
    set isbn(num){
        if(!isNaN(parseInt(num))) {
            this.#isbn = parseInt(num); 
        }
    }
    get titulo(){
        return this.#titulo;
    }
    set titulo(nuevoTitulo){
        if(nuevoTitulo.length>0){
            this.#titulo=nuevoTitulo;
        }
    }
    get autor(){
        return this.#autor;
    }
    set autor(nuevoAutor){
        if(nuevoAutor.length>0){
            this.#autor=nuevoAutor;
        }
    }
    get paginas(){
        return this.#paginas;
    }
    set paginas(num){
        if(!isNaN(parseInt(num))) {
            this.#paginas = parseInt(num); 
        }
    }
    mostrarLibro(){
        return `<p>El libro ${this.#titulo} con ISBN ${this.#isbn} creado por el autor ${this.#autor} tiene ${this.#paginas} páginas.</p>`;
    }
}

let libro1 = new Libro(Math.round(Math.random()*100000000),"Entrevista con el Vampiro","Anne Rice", 345);
let libro2 = new Libro(Math.round(Math.random()*100000000),"Dracula","Bram Stoker",418);

document.write(libro1.mostrarLibro());
document.write(libro2.mostrarLibro());

if(libro1.paginas>libro2.paginas){
    document.write(`El libro ${libro1.titulo} tiene más páginas.`);
} else {
    document.write(`El libro ${libro2.titulo} tiene más páginas.`);
}