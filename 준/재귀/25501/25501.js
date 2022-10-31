const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/재귀/25501/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();
const arr = input;

const rescursion = (str, l, r, cnt) => {
  if (l >= r) return [1, cnt];
  else if (str[l] !== str[r]) return [0, cnt];
  else return rescursion(str, l + 1, r - 1, cnt + 1);
};

arr.forEach((e) => {
  const str = e.split("");
  let cnt = 1;

  let result = rescursion(str, 0, str.length - 1, cnt);

  console.log(result.join(" "));
});
