const nodeListNumeros = document.querySelectorAll("li");
let promedioListaNumeros = document.querySelector("#promedio-lista-numeros");
let minimoListaNumeros = document.querySelector("#minimo-lista-numeros");
let maximoListaNumeros = document.querySelector("#maximo-lista-numeros");
let masFrecuenteListaNumeros = document.querySelector(
  "#mas-frecuente-lista-numeros"
);
const arrayListaNumeros = [];
let sumaListaNumeros = 0;

// Generacion de array de numeros en base al nodeList proveniente de los items #li del .html
for (let i = 0; i < nodeListNumeros.length; i++) {
  arrayListaNumeros.push(Number(nodeListNumeros[i].innerText));
  sumaListaNumeros += arrayListaNumeros[i];
}

// Calculo de valor maximo en array
let numeroMax = arrayListaNumeros[0];
for (let i = 1; i < arrayListaNumeros.length; i++) {
  if (arrayListaNumeros[i] > numeroMax) {
    numeroMax = arrayListaNumeros[i];
  }
}

// Calculo de valor minimo en array
let numeroMin = arrayListaNumeros[0];
for (let i = 1; i < arrayListaNumeros.length; i++) {
  if (arrayListaNumeros[i] < numeroMin) {
    numeroMin = arrayListaNumeros[i];
  }
}

// Calculo de valor mas repetido en array
let numeroMasFrecuente;
function calcularNumeroMasFrecuente(arrayListaNumeros) {
  const conteo = {};

  // Contar la frecuencia de cada número
  for (const numero of arrayListaNumeros) {
    conteo[numero] = (conteo[numero] || 0) + 1;
  }

  // Encontrar el número con el conteo máximo
  let maxConteo = 0;
  for (const numero in conteo) {
    if (conteo[numero] > maxConteo) {
      maxConteo = conteo[numero];
      numeroMasFrecuente = numero;
    }
  }

  return numeroMasFrecuente;
}
calcularNumeroMasFrecuente(arrayListaNumeros);

console.log(arrayListaNumeros);
calculoPromedio = sumaListaNumeros / arrayListaNumeros.length;
promedioListaNumeros.innerText = `El promedio es: ${calculoPromedio}`;
minimoListaNumeros.innerText = `El numero mas pequeño es: ${numeroMin}`;
maximoListaNumeros.innerText = `El numero mas grande es: ${numeroMax}`;
masFrecuenteListaNumeros.innerText = `El numero mas frecuente es: ${numeroMasFrecuente}`;
