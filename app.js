let seleccion;
function ingreso (){
    let usuario = prompt ("ingrese su usuario")
    console.log("Bienvenido/a " + usuario +" a la selección de productos"
    );          
}
ingreso()

class producto{
    constructor(producto, valor){ 
        this.producto = producto;
        this.valor = valor;
    } 
}

let valor = [
    {producto: "jean", valor: "15000"},
    {producto: "remera", valor: "7000"},
    {producto: "camisa", valor: "12000"},
    {producto: "saco", valor: "35000"},
    {producto: "sueter", valor: "20000"},
    {producto: "camiseta", valor: "8500"},
];

function ingresarProductos(){
    let producto = prompt("ingrese producto");
    let valor = prompt("ingrese valor");
    const nuevoProducto = new producto("producto, valor"); 
    arrayCarrito.push(nuevoProducto);
    alert ("producto agregado");
}

function Controlador(){
    arrayCarrito.forEach((item) => {
        alert (`ingreso producto ${item.producto}, valor ${item.valor}`)
    });
}

function verProductos(){
    const productos = arrayCarrito.map((productos) => productos.valor);{
    for (const productos of verProductos)
    alert(`los productos ingresados son:${productos.producto} valor ${productos.valor}`)
}
}


function finalizarCompra(){
    const total = arrayCarrito.reduce((accum, item)=> accum + item.valor, 0)    
    alert(`total valor a facturar ${total}`)
}

let arrayCarrito =[]

let opcion = prompt("Seleccione opcion: \n 6: Ingresar productos \n 7: Ver productos \n 8: Finalizar compra \n 9: Salir")


  while(opcion !=="9"){
    if (opcion==="6"){
        ingresarProductos();
    } 

    if (opcion==="7"){
        verProductos()
    }

    if (opcion==="8"){
        finalizarCompra()
    }

    if (opcion==="9"){
        salir()
    }

    opcion = prompt(
        "Ingrese una opcion \n 6: Ingresar producto; \n 7: Ver productos ingresados; \n 8: Finalizar compra; \n 9: Salir")
  }

alert("Aguardamos la nueva compra, saludos!!")
  