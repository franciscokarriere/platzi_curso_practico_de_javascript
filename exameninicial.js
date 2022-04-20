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
