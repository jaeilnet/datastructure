const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/2108/input.txt";

const [N, ...num] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// [1, 3, 8, -2, 2];
// [-2, 1, 2, 3, 8];

let answer = [];

function sortNum(ary) {
  let swap = true;
  let obj = {};
  for (let i = num.length - 1; i > 0; i--) {
    let cnt = 1;
    swap = true;
    for (let j = 0; j < i; j++) {
      let temp = 0;
      if (num[j] > num[j + 1]) {
        temp = num[j + 1];
        num[j + 1] = num[j];
        num[j] = temp;

        swap = false;
      }
    }

    obj[num[i]] = obj[num[i]] ? obj[num[i]] + cnt : 1;
    if (swap) break;
  }

  avg(ary);

  let mid = ary[Math.floor(N / 2)];

  answer.push(mid);

  let max = 0;

  for (let key in obj) {
    if (max < obj[key]) {
      max = obj[key];
    }
  }

  const maxx = Object.entries(obj).find((v) => v[1] === max);

  maxx ? answer.push(Number(maxx[0])) : answer.push(ary[0]);

  let maxmin = ary[ary.length - 1] - ary[0];

  answer.push(maxmin);

  return ary;
}

sortNum(num);

function avg(ary) {
  let avg = Math.round(
    ary.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / ary.length
  );

  answer.push(avg === -0 ? 0 : avg);
}

for (let i of answer) {
  console.log(i);
}
