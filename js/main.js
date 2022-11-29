/* TEMAS A TOCAR */
// condicional, ciclos, funciones.

let userName=prompt("Ingrese su nombre");
while(userName == null || userName == "") {
    userName=prompt("Por favor, ingrese su nombre");
}

let userSurname=prompt("Ingrese su apellido");
while(userSurname == null || userSurname == "") {
    userSurname=prompt("Por favor, ingrese su apellido");
}

let userGender = prompt('Ingrese M si sus pronombres son masculinos, F si son femeninos o X si son indistintos.')
   console.log ('Nombre: ' + userName + ' ' + userSurname + ', genero ' + userGender);

switch (userGender) {
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


let rentalCost=parseInt(prompt("Ingrese el monto del alquiler"));
while(rentalCost == null || rentalCost == "") {
    rentalCost=prompt("Ingrese el monto del alquiler");
} console.log ('Costo de alquiler: ' + rentalCost);

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

alert ( 
      'Alquiler: ' + "$" + rentalCost +
      '\nExpensas: ' + "$" + rentalExpenses +
      '\nDepósito: ' + "$" + rentalCost +
      '\nHonorarios: ' + "$" + rentalFee +
      '\nSellos: ' + "$" + rentalStamp +
      '\nAveriguación de garantías: ' + '$3000 (3 garantes)' +
      '\n' +
      '\nEl costo total de la entrada es de aproximadamente: ' + '$' + totalCost
);
