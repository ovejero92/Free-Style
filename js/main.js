function produto (nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}
sumaIva() 
 {
    this.precio = this.precio * 1.21}


const productoA = new producto("mesa", 1000, 10)
const productoB = new producto("silla", 500, 100)
const productoC = new producto("lampara", 100, 1000)
const productoD = new producto("lapices", 5, 10000)

const productos = [];
productos.push(new productoE("arroz",300,100))
productos.push(new productoF("fideso", 200, 500))
for (const producto of productos)
 producto.sumaIva()

let cantidadCompras= prompt ("Ingrese la cantidad de productos distintos que quiere comprar: /n- Mesa'n- Silla")
let precioTotal = 0;

function calculostock (cantidad, stock, precio) {
    if(stock >= cantidad) {
        calculoPrecio(cantidad, precio)
        alert("el precio roral es de: $" + (cantidad + precio))
    }
    else{
        alert("no disponemos de esa cantidad en stock. Nuestro stock actual es de: " + stock + "unidades")
    }
}

for(let i = 0; i < cantidadCompras; i++){
let compra1= prompt("ingrese la nombre del producto que quiere comprar: /n- Mesa/n-Silla").toLowerCase()
let cantidad1= prompt("ingrese la cantidad del producto que quiere comprar")

if(cmpra1 == productoA.nombre){
    calculostock(cantidad1, stockProductoA, precioProductoA)
}
else if (compra1 == productoB.nombre){
   calculostock(cantidad1, stockProductoB, precioProductoB)
}
else if (compra1 == productoC.nombre){
    calculostock(cantidad1, stockProductoC, precioProductoC)
}
else if (compra1 == productoD.nombre){
    calculostock(cantidad1, stockProductoD, precioProductoD)
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