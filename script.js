function sumarDigitos(num) {
  let result = num.toString();
  while (result.length > 1) {
    result = result
      .split("")
      .reduce((total, numero) => total + Number(numero), 0)
      .toString();
  }
  return Number(result);
}

// Ejercicio 29 (Extra)
// Crear una función en JavaScript llamada sumarDigitos que reciba como parámetro un número entero y retorne como resultado otro número entero que se calcula sumando los dígitos del número recibido.
// Si el resultado de la suma es un número de más de un dígito, se deberá repetir la suma la cantidad de veces que sea necesaria hasta obtener un número de un sólo dígito.
// Ejemplos:
// Input ---> Output
// sumarDigitos(0) ---> 0
// sumarDigitos(4) ---> 4
// sumarDigitos(62) ---> 8
// sumarDigitos(942) ---> 6
// sumarDigitos(132189) ---> 6
// sumarDigitos(493193) ---> 2

// Detalle de los ejemplos:
// ● 0-->0
// ● 4-->4
// ● 62-->6+2=8
// ● 942-->9+4+2=15-->1+5=6
// ● 132189-->1+3+2+1+8+9=24-->2+4=6
// ● 493193-->4+9+3+1+9+3=29-->2+9=11-->1+1=2
