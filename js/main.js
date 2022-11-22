/* FUNCIONES */
// Qué son y para qué se usan.

// Es un conjunto de instrucciones que se agrupan para realizar una tarea concreta.



// Como se usan.
// 1) Declarar la funcion.
   helloWorld();

   function helloWorld() {
      //Instrucciones.
      alert('Hello World');
   }


// 2) Invocar a la función.

   function retornarElNum3() {
   return 3;
   }

   let numTres = retornarElNum3();
   console.log(numTres);


   // Otra funcion

   function sumaTradicional(valorA, valorB) {
      return valorA + valorB;
   }

   console.log(sumaTradicional(300, 500));

   // Otra funcion
   let nombreAlumno = prompt('Ingrese el nombre del alumno: ');

   function saludarAlumno(nombreAlumno){
      alert('Hola ' + nombreAlumno);
   }

   saludarAlumno(nombreAlumno);
   

// SCOPE GLOBAL //
   let global = 10;

   function ejemploA() {
      console.log(global);
   }

   ejemploA();


// SCOPE LOCAL //
   function ejemploB() {
      let resultadoEjemploB = 10 + 10;
   }


/* FUNCION ANONIMA */

   let sumaAnonima = function (a, b) { return a + b }
   console.log(sumaAnonima(1000, 1000));

   let restaAnonima = function (a, b) { return a - b }

   console.log(restaAnonima(1000, sumaAnonima(1000,1000)));


/* FUNCION FLECHA */

   let division = (a,b) => {
      return a / b;
   }

   console.log('Division con funcion flecha: ');
   console.log(division(100,10));



   console.log('Multiplicacion con funcion flecha: ')

   let multiplicacion = (a,b) => a * b;

   console.log(multiplicacion(50,50));

   // funcion flecha con unico parametro y retorno

   let nombre = a => console.log('Hola ' + a);
   nombre('Firulais');