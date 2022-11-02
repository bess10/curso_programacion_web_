/*Hay que programar un carrito de compra de fruta.
El cliente eligirá que fruta quiere haciendo click sobre la imagen.
Un mensaje emergente le preguntará qué cantidad quiere.

Esta información se mostrará debajo de "Total carrito", 
en <p id="carrito"></p>, de esta forma:
 Kiwi 2 kg x 4,20€/kg = 8,40 €
 Total Compra: 8,40€
 
Se dará la opción de añadir o no más productos que se mostrarán
a continuación de los anteriores, y se sumará todo en el total. 
Por ejemplo:  
 Kiwi 2 kg x 4, 20€/kg = 8, 40€
 Pomelo 1 kg x 2,50€/kg = 2,50€
 Total Compra: 10,90€

// no se acumulan las compras de un solo producto se muestran como compras separadas del mismo producto:
 Kiwi 2 kg x 4, 20€/kg = 8, 40€
 Pomelo 1 kg x 2,50€/kg = 2,50€
 Kiwi 2 kg x 4, 20€/kg = 8, 40€*/

 var cantidadFruta;
 var totalCompra;
 var totalCarrito = [];
 var arrayFrutas = [];
 var arrayCarrito = [];
 var precioFruta;
 var nombreFruta;
 var totalFruta;
 
 document.getElementById("terminar").style.display = "none";
 document.getElementById("tituloCarrito").style.display = "none";
 // funcion que recibe el valor de la fruta que selecciona el usuario al dar click sobre la imagen, y dependiendo de la seleccion se establece por medio de un switch el valor de las variables nombreFruta y precioFruta
 function comprar(eleccion_fruta){
     
     switch (eleccion_fruta){
         case 0:
             nombreFruta = "Pomelo"
             precioFruta = 2.50;
             break;
         case 1:
             nombreFruta = "Kiwi"
             precioFruta = 4.20;
             break;
         case 2:
             nombreFruta = "Limon"
             precioFruta = 1.20;
             break;
         case 3:
             nombreFruta = "Piña"
             precioFruta = 2.8;
             break;
         case 4:
             nombreFruta = "Sandia"
             precioFruta = 1.20;
             break;
     }
     // al acabar el switch:
     // se pide una cantidad al usuario de la fruta seleccionada
     cantidadFruta = prompt(`Que cantidad quiere de ${nombreFruta}?: `);

     // se calcula el precio de la fruta por la cantidad que se solicita con el prompt y se guarda en una variable
     totalFruta = Math.round(precioFruta * parseFloat(cantidadFruta));

    // se añade elementos(los datos de cada fruta en un solo string) a arrayFrutas 
    arrayFrutas.push([nombreFruta + " "+ cantidadFruta + "  x "+ precioFruta + " = "+ totalFruta + " "]);
   
    document.getElementById("terminar").style.display = "flex";
    document.getElementById("tituloCarrito").style.display = "flex";
    
    // se llama a la funcion añadir y manda como parametro un array con las frutas(y sus datos) selecionadas por el usuario
    añadir(arrayFrutas);

    // se muestra las frutas que se van añadiendo en el array de carrito
    mostrar();

    //se añade el array que contiene el total de fruta por la cantidad, en el array totalCarrito
    totalCarrito.push(totalFruta);

    //se llama a la funcion calcularTotal y se envia como parametro el array con el total del carrito(array que contine los totales de cada fruta) y se guarda en la variable totalCompra
    totalCompra = calcularTotal(totalCarrito);
 
 } 
 
 // funcion que no recibe parametros, muestra el total de la compra en la etiqueta <p> con id="totalCompra" y oculta las imagenes y boton terminar
 function terminarCompra(){
    document.getElementById("terminar").style.display = "none";
     document.getElementById("totalCompra").innerHTML ="el total de su compra es: " + totalCompra;
     document.getElementById("frutas").style.display = "none";

 } 

 // funcion que recibe como parametro un array, devuelve una variable con la suma total de los elementos del array   
  function calcularTotal(arrayC){
      let total = arrayC.reduce((prev, curr) =>prev + curr, 0);
      return total;
  }

 // funcion que no recibe parametros, muestra por medio de un bucle cada elemento del array(cada uno con sus datos) y los muestra en una etiqueta <p> con id="carrito"
function mostrar(){
    for(let i=0; i<arrayCarrito.length; i++){
        document.getElementById("carrito").innerHTML = arrayCarrito[i].join("<br>");
    }  
}

// funcion que recibe un array commo parametro(con los datos de la fruta elegida) y este se añade al array carrito
 function añadir(arrayFrutaElegida){
    arrayCarrito.push(arrayFrutaElegida);
    console.log("arrayCarrito es ", arrayCarrito);
 }
 