console.log("Hola mundo");

// Ejercicio 1 codigo del cuadrado
console.group("cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado son: " + ladoCuadrado + "cm");

//const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
} // se puede llamar a la funcion perimetroCuadrado() con un valor de entrada por ej perimetroCuadrado(5)

// const areaCuaadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es: " + areaCuaadrado + "cm cuadrados");
function areaCuadrado(lado) {
  return lado * lado;
} // se puede llamar a la funcion areaCuadrado() con un argumento (valor) de entrada por ej areaCuadrado(5)

console.groupEnd();

// codigo del triangulo
// console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const basetriangulo = 4;
// const alturaTriangulo = 5.5;
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + basetriangulo;
// const areaTriangulo = (basetriangulo * alturaTriangulo) / 2;

// console.log(
//   "Los lados del triangulo son: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm y " +
//     basetriangulo +
//     "cm"
// );
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
// console.log("El area del triangulo es: " + areaTriangulo + "cm cuadrados");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
} // se puede llamar a la funcion perimetroTriangulo() con 3 argumentos de entrada por ej perimetroTriangulo(6,6,4)

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
} // se puede llamar a la funcion areaTriangulo() con 2 argumentos de entrada por ej areaTriangulo(4,5.5)

console.groupEnd();

// codigo del circulo
console.group("Circulo");
//radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");
function radioCirculo(diametro) {
  return diametro / 2;
} // se puede llamar a la funcion radioCirculo() con un argumento de entrada por ej radioCirculo(10)

//diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");
function diametroCirculo(radio) {
  return radio * 2;
} // se puede llamar a la funcion diametroCirculo() con un argumento de entrada por ej diametroCirculo(5)

//pi
const pi = 3.14;
console.log("El valor de pi es: " + pi);
const PI = Math.PI;
console.log("El valor de PI es: " + PI);

//circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
} // se puede llamar a la funcion perimetroCirculo() con un argumento de entrada por ej perimetroCirculo(5)

//area
// const areaCirculo = PI * (radioCirculo * radioCirculo);
// console.log("El area del circulo es: " + areaCirculo + "cm cuadrados");

function areaCirculo(radio) {
  return radio * radio * PI;
} // se puede llamar a la funcion areaCirculo() con un argumento de entrada por ej areaCirculo(5)

console.groupEnd();
