const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/백트래킹/15649/input.txt";

const [n, m] = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(n, m) {
  const seq = [...Array(m)].fill(0);
  const visited = [...Array(n)].fill(false);

  console.log(seq, visited);

  let result = "";

  function dfs(k) {
    // 0 === 4 ,2 ...
    if (k === +m) {
      const arr = [];
      for (let i = 0; i < m; i++) {
        arr.push(seq[i]);
      }

      return (result += `${arr.join(" ")}\n`);
    }

    for (let i = 1; i <= n; i++) {
      console.log(visited, seq, i);
      if (!visited[i]) {
        seq[k] = i;
        visited[i] = true;
        dfs(k + 1);
        visited[i] = false;
      }
    }
  }

  dfs(0);
  return result;
}

// console.log(solution(n, m));
solution(n, m);
