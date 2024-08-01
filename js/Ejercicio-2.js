class Cuenta{
    constructor(paramTitular){
        this.titular = paramTitular;
        this.saldo = 0;
    }
    ingresar(cantidad){
        this.saldo = this.saldo + cantidad;
    }
    extraer(cantidad){
        this.saldo = this.saldo - cantidad;
    }
    get informar(){
        return this.saldo;
    }
}

let cuenta1 = new Cuenta("Alex");
document.write(`El titular de la cuenta es ${cuenta1.titular}<br>`);
cuenta1.ingresar(parseInt(prompt("Ingrese la cantidad a depositar:")));
document.write(`El saldo de la cuenta es: ${cuenta1.informar}<br>` );
cuenta1.extraer(parseInt(prompt("Ingrese la cantidad a extraer:")));
document.write(`El saldo de la cuenta es: ${cuenta1.informar}<br>` );
