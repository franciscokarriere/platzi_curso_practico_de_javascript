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
const ladoTriangulo3 = 4;
console.log(
  "Los lados del triangulo son: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm y " +
    ladoTriangulo3 +
    "cm"
);
console.groupEnd();
