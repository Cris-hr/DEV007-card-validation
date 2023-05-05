import validator from './validator.js';

//console.log(validator);

const inputName= document.getElementById("input-name")
const inputNumber= document.getElementById("input-number")
const inputMonth= document.getElementById("input-month")
const inputYear= document.getElementById("input-year")
//const inputCVC= document.getElementById("input-cvc")
const cardName= document.getElementById("card-name")
const cardMonth= document.getElementById("card-month")
const cardYear= document.getElementById("card-year")

const button= document.getElementById("boton")
const cardNumber = document.getElementById("card-number")



inputName.addEventListener("input", () => {
  cardName.innerText = inputName.value;

  if(inputName.value.length === 0) {
    cardName.innerText = "xxxxxxxxxxxxx";
  } 
})

inputMonth.addEventListener("input", () => {
  cardMonth.innerText = inputMonth.value;
})

inputYear.addEventListener("input", () => {
  cardYear.innerText = inputYear.value;
})

inputNumber.addEventListener("input", () => {
  cardNumber.innerText = inputNumber.value;

  if(inputNumber.value.length === 0) {         //si despues de colocar un numero y luego borro todo, volvera aparecer el texto que puse como modelo en el html
    cardNumber.innerText = "0000 0000 0000 0000";
  }
})

button.addEventListener("click", () => {
  const inputName= document.getElementById("input-name").value;
  if(inputName === "") {
    return alert("Tienes que ingresar tu nombre");
  }
  
  const inputNumber = document.getElementById("input-number").value;
  if(inputNumber === "") {
    return alert("Tienes que ingresar el numero de tu tarjeta");
  }

  const valid= validator.isValid(inputNumber);
  if(valid === true) {  
    alert("La tarjeta es valida, puedes realizar tu compra!");   
  } else {
    alert("La tarjeta es invalida, intenta otra vez!"); 
  }
  const maski= validator.maskify(inputNumber);
  alert(maski);
})












 
  
  
  

  


  





