const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/1181/input.txt";

const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

function sort(arr) {
  let answer = [];

  // let setArr = Array.from(new Set(arr));
  let setArr = arr.filter((e, i) => arr.indexOf(e) === i);
  // console.log(setArr);

  let sorted = setArr.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
  });

  for (let i = 1; i <= sorted[sorted.length - 1].length; i++) {
    let temp = sorted.filter((el) => el.length === i);
    answer.push(...temp.sort());
  }

  answer.forEach((e) => console.log(e));
}

sort(arr);
