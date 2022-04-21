/* Variables y operaciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve?
r. Un espacio reservado de memoria donde se almacena informacion

¿Cuál es la diferencia entre declarar e inicializar una variable?
r. Una variable se declara para reservar su espacio de memorio, se inicializa para guardar info en ese espacio.

¿Cuál es la diferencia entre sumar números y concatenar strings?
r. Sumar numeros como operacion matematica, concatenar es cuando se juntan dos textos para formar uno mismo

¿Cuál operador me permite sumar o concatenar?
r. El signo de +

*/

/* 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre
Apellido
Nombre de usuario en Platzi
Edad
Correo electrónico
Mayor de edad
Dinero ahorrado
Deudas
*/
// 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let nombre = "Juan";
let apellido = "Perez";
let nombreDeUsuario = "juanperez";
let edad = "18";
let correoElectronico = "juanperez@platzil.com";
let mayorDeEdad = true;
let dineroAhorrado = "100000";
let deudas = "0";

/* 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)
*/
let nombreCompleto = nombre + " " + apellido;
let dineroReal = dineroAhorrado - deudas;

/* Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función?
r. Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama a la funcion.

¿Cuándo me sirve usar una función en mi código?
r. Cuando se necesita repetir una tarea.

¿Cuál es la diferencia entre parámetros y argumentos de una función?
r. Un parametro es una variable que se le pasa a la funcion, un argumento es el valor que se le pasa a la funcion.

*/

/* 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
 */
//codigo ejemplo
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log(
  "Mi nombre es " +
    completeName +
    ", pero prefiero que me digas " +
    nickname +
    "."
);
//funcion que cambia cuando sea necesario las variables constantes por parametros y argumentos en una funcion
function changeName(name, lastname, nickname) {
  console.log(
    "Mi nombre es " +
      name +
      " " +
      lastname +
      ", pero prefiero que me digas " +
      nickname +
      "."
  );
}
changeName(name, lastname, nickname);

/* Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una condicional?
r. Una condicional es una agrupacion de instrucciones que se ejecutan cuando se cumple una condicion.

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
r. Existen 3 tipos de condicionales en JavaScript: if, else if y else.

¿Puedo combinar funciones y condicionales?
r. Si, puedes combinar funciones y condicionales.

*/

// 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";
switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    break;
}

//cambio codigo anterior usando if, else if y else
if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
} else {
  console.log("No es un tipo de suscripcion valido");
}

// 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion === "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}

// Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional
// replicar el comportamiento del codigo anterior solo utilizando arrays y un solo condicional
const tipoDeSuscripcion = "ExpertPlus";
const tiposDeSuscripcion = ["Free", "Basic", "Expert", "ExpertPlus"];
const descripcionSuscripcion = [
  "Solo puedes tomar los cursos gratis",
  "Puedes tomar casi todos los cursos de Platzi durante un mes",
  "Puedes tomar casi todos los cursos de Platzi durante un año",
  "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
];
const res = (descripcionSuscripcion, tiposDeSuscripcion) => {
  for (let i = 0; i < tiposDeSuscripcion.length; i++) {
    if (tipoDeSuscripcion === tiposDeSuscripcion[i]) {
      console.log(descripcionSuscripcion[i]);
    }
  }
};
console.log(res(descripcionSuscripcion, tiposDeSuscripcion));

// Ciclos
/* 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo?
r. un ciclo es un bloque de codigo que se repite N cantidad de veces hasta que se cumpla la condicion

¿Qué tipos de ciclos existen en JavaScript?
r. while, do while, for

¿Qué es un ciclo infinito y por qué es un problema?
r. un ciclo infinito sucede cuando no se cumple la condicion de cierre y genera el proceso infinitas veces generando consumo elevado de memoria y provocando el colapso del sistema


¿Puedo mezclar ciclos y condicionales?
r. si, incluso los ciclos se complentan con condicionales para funcionar de forma adecuada
*/

// 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}
//
var i = 0;
while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}
//
var i = 10;
while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}

/* 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

Pista: puedes usar la función prompt de JavaScript.
*/
//usar prompt para consultar cuanto es 2 + 2, si se responde correcto mostrar mensaje de felicitaciones, si responde mal vuelve a preguntar
let respuesta = prompt("¿Cuánto es 2 + 2?");
while (respuesta != "4") {
  respuesta = prompt("¿Cuánto es 2 + 2?");
}
console.log("Felicitaciones, has respondido correctamente");

//Listas
/*1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array?
r. un array es una coleccion de datos que se pueden acceder por un indice numerico

¿Qué es un objeto?
r. un objeto es una coleccion de datos que se pueden acceder por una llave

¿Cuándo es mejor usar objetos o arrays?
r. cuando se necesita una coleccion de datos que no sean numeros, o cuando se necesita una coleccion de datos que no sean strings

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
r. si, puedes mezclar arrays con objetos o objetos con arrays
*/
//2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
const array = ["Hola", "Mundo", "!"];
const imprimirPrimerElemento = (array) => {
  console.log(array[0]);
};
imprimirPrimerElemento(array);

//3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
const array = ["Hola", "Mundo", "!"];
const imprimirElementos = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
imprimirElementos(array);
//4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
const objeto = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
};
const imprimirElementos = (objeto) => {
  for (let i in objeto) {
    console.log(objeto[i]);
  }
};
imprimirElementos(objeto);
