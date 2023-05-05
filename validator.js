const validator = {

  
  isValid: function(creditCardNumber){

    const tarjetaArray= creditCardNumber.split("").map(Number);
  
    const tarjetaInvertida= tarjetaArray.reverse();
   
    let total= 0;
    let pares= [];    

    for(let i=0; i<tarjetaInvertida.length; i++) {
  
      if (i%2 !==0) {
        pares= tarjetaInvertida [i]*2;
  
        if(pares>=10) {                
          const sumaPares= pares.toString().split("");         
          pares= Number(sumaPares[0]) + Number(sumaPares[1]);  
        }
      } else {
        pares = tarjetaInvertida[i];   
      }

      total = total + pares;   
    }

    if (total % 10 === 0) {      
      return true;    
    } else {
      return false;
    }
  },
  maskify: function(creditCardNumber){
    const numbersMask= creditCardNumber.slice(0,-4);
    const mostrarNumbers= creditCardNumber.slice(-4);
    const mask= numbersMask.replace(/./g, "#");
    return mask + mostrarNumbers;
  }
};
export default validator;

//solicitar el numero de la tarjeta
//const numTarjeta= ("4083952015263");
//console.log (numTarjeta);

//declaro la variable que convertira el numero de la tarjeta en string y luego en array numero  
//const tarjetaArray= numTarjeta.split("").map(Number);
//console.log(tarjetaArray);

//declaro otra variable que reverse el numero de la tarjeta.
//const tarjetaInvertida= tarjetaArray.reverse();
//console.log(tarjetaInvertida);

//let total = 0;  //creo una variable total "cero" para al final ir sumando todos los digitos del array que contendra todos los numeros de la tarjeta
//let pares= [];   // creo una variavle de array vacio, que luego almacenara todos los numeros de incice pares e inpares

//hago el recorrido del array uno a uno indice x indice
//for(let i=0; i<tarjetaInvertida.length; i++) {
//console.log(tarjetaInvertida);

//ubicando las posiciones pares del array (si el indice dividido entre 2 da como residuo 0, 
//quiere decir que esta en la posicion inpar y si el residuo es diferente de cero entonces es la posic.par).//pero por el "reverse" que se iso al array, esta logica tambien se reversa o se hace lo contrario.
//if (i % 2 !== 0) {
//pares= tarjetaInvertida[i] * 2;    //multiplico por 2 a los numeros de las posiciones pares
//console.log(pares);

//if(pares >= 10) {                 // la condicion si la sumatoria de digitos es mayor o igual que 10,se sumen sus digitos
//const sumaPares= pares.toString().split("");    //convierto a "pares" en string y los separo con .split"
//pares= Number(sumaPares[0]) + Number(sumaPares[1]);  //hago la sumatoria de las posiciones "0" y "1", pero tambien convirtiendolo en numero.
//console.log(pares);
//}
//} else {
//pares = tarjetaInvertida[i];   //pero le digo que: "pares" es igual a "tarjetaInvertida" que ira recorriendo indice x indice.
//}                               //ojo: tarjetaInvertida contiene es el array que contiene a todos los numeros de la tarjeta(13 digitos)

//total = total + pares;   //ahora le digo que sume todos los digitos de "pares" que contiene todos los numeros de la tarjeta
//console.log(total);      //ojo: si total=0; entonces; 0 = 0 + (el primer digito de los nuemeros de la tarjeta) => [3,3,2,1,1,0,2,1,9,6,8,0,4]
//}

//if (total % 10 === 0) {        //pongo la condicion de que si, la sumatoria total de digotos dividido entre 10 da como residuo CERO, 
//return true;                   //si cumple con la condicion entonces la tarjeta es valida o true.
//} else {
//return false;                 // y si no cumpme la condicion entonces es false o invalido.
//}

//const numbersMask= numTarjeta.slice(0,-4);  //creo una variable para hacer me muestre todo menos los ultimos 4 dogitos
//console.log(numbersMask);                    //el .slice(0,-4) muestra todos menos los ultimos 4 numeros de la tarjeta
//const mostrarNumbers= numTarjeta.slice(-4);   //muestra solo los ultimos 4 digitos del numero de la tarjeta
//console.log(mostrarNumbers);
//const mask= numbersMask.replace(/./g, "#");  //creo una variable para que con ".replace" reemplace los numeros 
//console.log(mask);                           //(todos menos los 4ultimos) los reemplazo por "#".
//console.log(mask + mostrarNumbers);        //ahora junto todo(los primeros numeros enmascarados con "#" + los 4)
//ultimos digitos que si se pueden ver("mostrarNumbers")