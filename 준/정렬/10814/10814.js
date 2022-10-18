const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/10814/input.txt";

const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

// arr
//   .map((e) => e.split(" "))
//   .sort((a, b) => a[0] - b[0])
//   .forEach((e) => console.log(e.join(" ")));

arr.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

console.log(arr.join("\n"));
