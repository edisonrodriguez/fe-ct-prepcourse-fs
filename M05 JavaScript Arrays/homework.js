/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let ultimo = array.length
   return array[ultimo-1]
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   const miles = array.map((element) => element + 1
    );
    return miles
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   const counuevoElem = array.push(elemento);
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   const nuevoElem = array.unshift(elemento);
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let nuevoTexto = palabras.join(' ');
   return nuevoTexto;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   let element = array.includes(elemento) 
   return element
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let element = 0;
   for (let index = 0; index < arrayOfNums.length; index++) {
      element = element + arrayOfNums[index];
   }
  return element;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let element = 0;
   for (let index = 0; index < resultadosTest.length; index++) {
      element = element + resultadosTest[index];
   }
  return element/(resultadosTest.length);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let mayor = arrayOfNums[0], menor = 0;
   for (let index = 1; index < arrayOfNums.length; index++) {

      menor = arrayOfNums[index];
      if (mayor > menor)
         mayor = mayor;
      else 
         mayor = menor;
   }
  return mayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) return 0
   if (arguments.length === 1) return arguments[0]
   let resultado = 1;
   for (let index = 0; index < arguments.length; index++) {
      resultado = resultado * arguments[index];
   }
   return resultado
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let acum=0;
   array.forEach(element => {
      if (element > 18)
         acum++;
   });
   return acum
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia) {
      case 1:
         return "Es fin de semana"
         break;
      case 2:
         return "Es dia laboral"
         break;
      case 3:
         return "Es dia laboral"
         break;
      case 4:
         return "Es dia laboral"
         break;
      case 5:
         return "Es dia laboral"
         break;
      case 6:
         return "Es dia laboral"
         break;
      case 7:
         return "Es fin de semana"
         break;
      default:
         return "Es dia laboral"
         break;
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let numero = num.toString().split('')
   if(numero[0] == 9)
      return true
   else 
      return false
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   let igual = array[0];
   let diferente;
   let cont;
   for (let index = 1; index < array.length; index++) {
      diferente = array[index];
      if (igual != diferente)
         return cont=false;
      else
         cont = true;
   }
   return cont
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const array2 = [];
   for (let index = 0; index < array.length; index++) {
      if (array[index] === "Enero" || array[index] === "Marzo" || array[index] === "Noviembre")
         array2.push(array[index])
   }
   if (array2.length < 3) 
      return "No se encontraron los meses pedidos"
   else 
      return array2
}
function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let mult = [];
   for (let index = 0; index <= 10; index++) {
      mult.push(6*index) 
   }
   return mult
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   array2 = [];
   for (let index = 0; index < array.length; index++) {
      if (array[index] > 100)
         array2.push(array[index])
      
   }
   return array2
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arreglo = [];
   for (var i = 1; i <= 10; i++) {
     num += 2;
     arreglo.push(num);
     if (num === i) {
       return "Se interrumpió la ejecución";
     }
   }
   return arreglo;
} 

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const array2= [];
   let index = 0;
   for (let index = 0; index < 10; index++) {
      if (index === 5)
         continue;
      else 
         num = num + 2;
         array2.push(num);
   }
   return array2
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
