"use strict";

const name = prompt("Bo día. Antes de continuar, preciso saber o seu nome");

const age = Number(
  prompt(
    `Encantado de coñecel@ ${name}. Precisamos saber a sua idade para aplicarlle o desconto. `
  )
);

if (age < 12) {
  console.log(`A ${name} correspondelle o descuento infantil`);
} else if (12 <= age && age < 30) {
  console.log(`A ${name} correspondelle o descuento xuvenil`);
} else if (60 <= age) {
  console.log(`A ${name} correspondelle o descuento para xubilados`);
} else {
  console.log(`A ${name} non lle corresponde ningún desconto`);
}

// import { name } from "./script_1.js";
// console.log(name);
