//시간초과 O(N^2)

const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/1427/input.txt";

const [N, ...num] = fs.readFileSync(filePath).toString().trim().split("\n");

const xy = num.map((e) => [e]);

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][0][0] >= arr[j][0][0]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(sort(xy));
