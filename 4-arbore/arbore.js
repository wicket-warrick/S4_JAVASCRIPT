"use strict";

const symbol = prompt("Que símbolo desexas clonar?");
const height = Number(prompt(`Cantos pisos desexas facer?`));

for (let i = 1; i <= height; i++) {
  console.log(symbol.padEnd(i, symbol));
}
