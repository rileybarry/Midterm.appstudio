
function calcAvgSquare(x, y, z) {
  return ((x + y + z)/3) * (x ** 2);
}

let num1 = Number(prompt(`Please enter your first number.`));
let num2 = Number(prompt(`Please enter your second number.`));
let num3 = Number(prompt(`Please enter your third number.`));

alert(`The answer is ${calcAvgSquare(num1, num2, num3)}.`);
