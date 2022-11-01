import Juros from "./Juros.js";

let aplicacao1 = new Juros(10000, 0.07, 24);
console.log(aplicacao1.calcularJurosSimples());
console.log(aplicacao1.calcularJurosCompostos());

let aplicacao2 = new Juros(10000, 0.15, 10);
console.log(aplicacao2.calcularJurosSimples());
console.log(aplicacao2.calcularJurosCompostos());
