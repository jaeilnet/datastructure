const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/1427/input.txt";

const num = fs.readFileSync(filePath).toString().trim().split("");

function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = 0;
    let currentValue = arr[i];

    for (let j = i - 1; j >= 0 && arr[j] < currentValue; j--) {
      arr[j + 1] = arr[j];

      temp = j + 1;
    }

    if (temp !== 0) {
      arr[temp - 1] = currentValue;
    }
  }

  return Number(arr.join(""));
}

console.log(sort(num));
