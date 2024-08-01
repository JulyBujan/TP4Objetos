class Producto{
    constructor(codigo,nombre,precio){
        this.codigo = parseInt(codigo);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    imprimeDatos(){
        return `Código: ${this.codigo}<br>Nombre: ${this.nombre}<br>Precio: ${this.precio}<br>`;
    }
}

let producto1 = new Producto(303456,"Azucar",50);
let producto2 = new Producto(303457,"Leche",20);
let producto3 = new Producto(303458,"Harina",10);

let arreglo = [producto1,producto2,producto3];

for(let i=0; i<arreglo.length; i++){
    document.write(`<p> ${arreglo[i].imprimeDatos()} </p>`);
}
