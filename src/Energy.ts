/**
 * The program calculates the
 *
 *
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-09-15
 */

import promptSync from "prompt-sync";
  const prompt = promptSync();
  const speed = (2.998 * 10 ** 8) ** 2;
  const massString = prompt("What is the mass : ");
try {
  // let logSize: number
  const mass = parseFloat(massString);
  if (isNaN(mass)) {
    throw new Error("not a number");
  }
  if (mass <= 0) {
    throw new Error("negative number");
  }

  const energy = mass * speed;
  console.log(`${energy} Joules would be produced`);
} catch (e) {
  console.log("Not an acceptable input");
}

console.log("\nDone.");
