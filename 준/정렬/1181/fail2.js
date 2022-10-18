const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/1181/input.txt";

const [N, ...string] = fs.readFileSync(filePath).toString().trim().split("\n");

function mergeSort(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j].length > arr1[i].length) {
      result.push(arr1[i]);
      i++;
    } else if (arr2[j].length === arr1[i].length) {
      if (arr1[i].charCodeAt() === arr2[j].charCodeAt()) {
        if (charSort(arr1[i]) < charSort(arr2[j])) {
          result.push(arr1[i]);
          i++;
        } else {
          result.push(arr2[j]);
          j++;
        }
      } else if (arr1[i].charCodeAt() < arr2[j].charCodeAt()) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  // console.log(result, "\n");

  return result;
}

function merge(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = merge(arr.slice(0, mid));
  let right = merge(arr.slice(mid));

  // console.log(left, right);

  return mergeSort(left, right);
}

function charSort(char) {
  if (!char) return;

  let sum = 0;
  for (let i = 0; i < char.length; i++) {
    sum += char.charCodeAt(i);
  }
  // console.log(char, sum);

  return sum;
}

const filter = string.filter((v, i) => string.indexOf(v) === i);

const sort = merge(filter);

console.log(sort.join("\n"));
