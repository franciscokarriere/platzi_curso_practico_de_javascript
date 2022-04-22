console.log("Hola mundo");

// Ejercicio 1 codigo del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado son: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuaadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuaadrado + "cm cuadrados");
console.groupEnd();

// codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const basetriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + basetriangulo;
const areaTriangulo = (basetriangulo * alturaTriangulo) / 2;

console.log(
  "Los lados del triangulo son: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm y " +
    basetriangulo +
    "cm"
);
console.log("La altura del triangulo es: " + alturaTriangulo + "cm");
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
console.log("El area del triangulo es: " + areaTriangulo + "cm cuadrados");
console.groupEnd();

// codigo del circulo
console.group("Circulo");
//radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
//diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
//pi
const pi = 3.14;
console.log("El valor de pi es: " + pi);
const PI = Math.PI;
console.log("El valor de PI es: " + PI);
//circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
//area
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El area del circulo es: " + areaCirculo + "cm cuadrados");
