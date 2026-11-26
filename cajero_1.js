const prompt = require("prompt-sync")();

let precioproducto;
let total=0;
let contador=0;
let continuar= true;

do{
    precioproducto = Number(prompt("Ingresa el precio del producto (0 para finalizar): "));
if (isNaN(precioproducto) || precioproducto <0){
    console.log("Eror ingresa un numero valido y mayor a 0.")
}else if (precioproducto === 0){
    continuar=false;
}else{
    total=total + precioproducto;
    contador=contador + 1;
}
}while (continuar === true){
    console.log("Cantidad de productos registrados= " + contador)
    console.log("Total de la compra= " + total)
}
