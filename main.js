let hamburguesa = 200
let papafrita = 150
let gaseosa = 100

alert ("ingrese su orden");
alert ("1- Hamburguesa - 2- Papas Fritas - 3- Gaseosa - No- Salir")
let consulta = prompt ("desea pedir?");
let cantidad = 0;
while (consulta == "si"){
    let ingreso = prompt ("que desea ordenar? se cargara hasta que ingrese ´no´");
    if (ingreso == 1){
        cantidad = cantidad + 200;
    } else if (ingreso == 2){
        cantidad = cantidad + 150;
    } else if (ingreso == 3){
        cantidad = cantidad + 100;
    }else{
        alert ("gracias por su compra");
        alert ("el monto total es : "+ cantidad);
    }
}