"use strict";

//VERSION_1
// for (let hour = 8; hour <= 22; hour++) {
//   if (hour <= 9) {
//     console.log("0".padEnd(2, hour));
//   } else {
//     console.log(hour);
//   }
//   console.log(`Son as ${hour} horas.`);
// }
/**
 *
 *
 *
 *
 *
 */
//VERISON_2
// for (let hour = 0; hour <= 24; hour++) {
//   if (hour >= 8 && hour <= 12) {
//     console.log("".padStart(5 * hour, "cucu "));
//   }
//   if (hour >= 13 && hour <= 22) {
//     console.log("".padStart(5 * (hour - 12), "cucu "));
//   }
//   //
//   if (hour <= 9) {
//     console.log("0".padEnd(2, hour));
//   } else {
//     console.log(hour);
//   }
//   //
//   if (hour >= 8 && hour <= 11) {
//     console.log(`Son as ${hour}.Bo día.`);
//   } else if (hour === 12) {
//     console.log(`Son as ${hour}.Feliz mediodia.`);
//   } else if (hour >= 13 && hour <= 21) {
//     console.log(`Son as ${hour}.Boa tarde.`);
//   } else if (hour === 22) {
//     console.log(`Son as ${hour}.Boa noite.`);
//   }
// }
//
/**
 *
 *
 *
 *
 *
 *
 */
//VERSION_3

let date = new Date("December 11, 2021 00:00:00");
let hour = date.getHours();
let minutes = "0" + date.getMinutes();

for (hour; hour <= 24; hour++) {
  if (hour >= 8 && hour <= 12) {
    console.log("".padStart(5 * hour, "cucu "));
  }
  if (hour >= 13 && hour <= 22) {
    console.log("".padStart(5 * (hour - 12), "cucu "));
  }
  //
  if (hour <= 9) {
    hour = "0" + hour;
  }
  //
  date.setHours(hour);
  console.log(date);
  console.log(hour + ":" + minutes);

  //
  if (hour >= 8 && hour <= 11) {
    console.log(`Son as ${hour}.Bo día.`);
  } else if (hour === 12) {
    console.log(`Son as ${hour}.Feliz mediodia.`);
  } else if (hour >= 13 && hour <= 21) {
    console.log(`Son as ${hour}.Boa tarde.`);
  } else if (hour === 22) {
    console.log(`Son as ${hour}.Boa noite.`);
  }
}
