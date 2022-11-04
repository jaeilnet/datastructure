const fs = require("fs");
let [n] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const result = n.split("");

if (!result.includes("0")) {
  console.log(-1);
} else {
  const sum = result.reduce((acc, cur) => acc + parseInt(cur), 0);
  if (sum % 3 !== 0) return console.log(-1);
  const v = result.sort((a, b) => b - a).join("");

  console.log(v);
}
