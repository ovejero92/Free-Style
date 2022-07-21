for(let i = 1 ; i <= 5 ; i++) {
    let nombre = prompt( "ingrese su nombre:")
        alert("bienvenido " + nombre + "." + "\nSu turno es el N:" + i)
        
    }
    alert("nos quedamos sin turnos")

    let nombreproductoA= "mesa"
let precioProductoA= 1000
let stockProductoA= 10

let nombreProductoB= "silla"
let precioProductoB= 500
let stockProductoB= 100

let cantidadCompras= prompt ("Ingrese la cantidad de productos distintos que quiere comprar: /n- Mesa'n- Silla")
let precioTotal = 0;
 for(let i = 0; i < cantidadCompras; i++){
let compra1= prompt("ingrese la nombre del producto que quiere comprar: /n- Mesa/n-Silla")
let cantidad1= prompt("ingrese la cantidad del producto que quiere comprar")

if(cmpra1 == "mesa"){
    if(stocProductoA >= cantidad1) {    preciototal += cantidad1 + precioProductoA 
    alert("el precio total es de : $" + (cantidad1 + precioProductoA))}
    else{
        alert("no disponemos de esa cantidad en stock. nuestro stock actual es de: " + stockProductoA+ " unidades")
    }
}
else if (compra1 == "silla"){
    if(stockProductoB >= cantidad1) {precioTotal += cantidad1 * precioProductoB 
    alert("el precio total es de: $" + (cantidad1 * precioProductoB))}
    else{alert("no disponemos de esa cantidad en stock. nuestro stock actual es de : " + stockProductoB + " unidades") }
}
else{ alert("no tenemos ese producto")}
 }
 switch(true){
    case precioTotal < 2000 || precioTotal > 1000:
        precioTotal = precioTotal * 0.95
        alert("recibiste un descuento del 5% por tu compra")
        break;
        case precioTotal <5000: 
        precioTotal = precioTotal * 0.90
        alert("recibiste un descuento del 10% por tu compra")
        case precioTotal < 10000:
            precioTotal = precioTotal * 0.80
            alert("recibiste un descuento del 20% por tu compra")
            break;
            case precioTotal > 10000:
                alert("recibiste un descuento del 40% POR TU COMPRA")
                precioTotal = precioTotal * 0.60
                break;
                default:
                    console.log(preciototal)
                    alert("no ingresaste un precio en numeros");
                    break; 
 }
 alert("este es el precio total final de tu compra: " + precioTotal)

 function sumaIva(precio) {
    return precio * 1.21
 }
 let precioTotalConImpuestos = sumaIva(precioTotal)

 alert("ese es tu precio total final con impouestos de tu compra " + precioTotalConImpuestos)