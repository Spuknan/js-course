/* TEMAS A TOCAR */
// condicional, ciclos, funciones.

let userName = prompt('Ingresar nombre');
let userSurname = prompt('Ingresar apellido');
let userGender = prompt('Ingrese M si sus pronombres son masculinos, F si son femeninos o X si son indistintos.')
   console.log ('Nombre: ' + userName + ' ' + userSurname + ', genero ' + userGender);

switch (userGender) { //Switch simple para acomodar el pronombre.
   case 'F':
      alert('Bienvenida, ' + userName + ' ' + userSurname + '! Esta es una calculadora para saber cuánto te va a salir la entrada de un alquiler.');
   break;

   case 'M':
      alert('Bienvenido, ' + userName + ' ' + userSurname + '! Esta es una calculadora para saber cuánto te va a salir la entrada de un alquiler.');
   break;

   default:
      alert('Bienvenidx, ' + userName + ' ' + userSurname + '! Esta es una calculadora para saber cuánto te va a salir la entrada de un alquiler.');
   break;
}


let rentalCost = parseInt(prompt('Ingrese el monto del alquiler'));
   console.log ('Costo de alquiler: ' + rentalCost);

let rentalExpenses = parseInt(prompt('Ingrese el monto de las expensas'));
   console.log ('Expensas: ' + rentalExpenses);


let threeYearsCost = rentalCost * 12 * 3;
   console.log ('Costo por tres años de alquiler: ' + threeYearsCost);

let rentalFee = threeYearsCost * 0.04;
   console.log ('Honorarios: ' + rentalFee);


let rentalStamp = 0;


function rentalStampMultiply(a , b) {
   rentalStamp = a * b;
}

if (threeYearsCost > 400000) {
   rentalStampMultiply(threeYearsCost, 0.0148);
}

console.log('Costo de los sellos: ' + rentalStamp);

let totalCost = (rentalCost + rentalCost + rentalExpenses + rentalFee + rentalStamp + 3000);

alert ('El costo total de la entrada es de aproximadamente: ' + '$' + totalCost);
