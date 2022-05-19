// CLASE 5 - Lunes 2 de mayo de 2022
// Estructuras de Control - CICLOS

// Ejercicio 7: Cantidad y Distribución de Positivos

/*• Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto 
positivos como negativos.
• Contar la cantidad de valores introducidos que sean 
mayores a 0 y el porcentaje de positivos respecto del total.*/

/* Ingrese número: 9
Ingrese número: 7
Ingrese número: -1
Ingrese número: 1
Ingrese número: 0
3 positivos, 75% del total */

let cantTotal: number = 0;
let cantPositivos: number = 0;
let porcPositivos: number = 0;

let num: number = Number(prompt("Ingrese un número"));
while (num !== 0) {
  if (num > 0) {
    cantPositivos++;
  }
  cantTotal++;
  num = Number(prompt("Ingrese un número"));
}
if (cantTotal > 0) {
  porcPositivos = (cantPositivos * 100) / cantTotal;
  console.log(cantPositivos + " positivos. " + porcPositivos + "% del total.");
}
