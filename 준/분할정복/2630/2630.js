const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/분할정복/2630/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();
const arr = input.map((e) => e.split(" ").map(Number));

function solution(n, arr) {
  let [white, blue] = [0, 0];

  function divide(x, y, length) {
    console.log(x, y, length, "xylength");
    let tempCount = 0;

    for (let i = x; i < x + length; i += 1) {
      for (let j = y; j < y + length; j += 1) {
        if (arr[i][j]) {
          console.log(arr[i], arr[i][j], "arr");
          tempCount += 1;
        }
      }
    }

    // console.log(tempCount, length, "tempCount");
    if (!tempCount) {
      white += 1;
      console.log(white, "white");
    } else if (tempCount === length * length) {
      blue += 1;
      console.log(blue, tempCount, length * length, "blue");
    } else {
      divide(x, y, length / 2);
      divide(x, y + length / 2, length / 2);
      divide(x + length / 2, y, length / 2);
      divide(x + length / 2, y + length / 2, length / 2);
    }
  }

  divide(0, 0, n);
}

solution(n, arr);

// int fibo(int n)
// {
//    if(n<=0) return 0;
//    else if(n<=1) return 1;
//    return fibo(n-1) + fibo(n-2);
// }
// int main()
// {
//    std::cout<<fibo(10);
//    return 0;
// }
