// 버블정렬
// 서로 인접한 두 원소를 검사하여 정렬하는 알고리즘 (거의 안쓰인다.)

const input = [1, 2, 4, 2, 3, 5, 8];

function bubbleSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = 0;

      // 37 45

      if (arr[i] > arr[j]) {
        temp = arr[j]; // 0 <- 45

        // swap

        arr[j] = arr[i]; // 45 -> 37
        arr[i] = temp; // 37 <- 45
      }
    }
  }

  return arr;
}

// let input = [1, 2, 4, 2, 3, 5, 8];

console.log(bubbleSort1(input));

// 개선코드 시간복잡도 O(N) 선형이 될 수도 있다. 그렇다고해서 쓰지는 않는다.

function bubbleSort(arr) {
  let noSwaps = true;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort(input));
// [50, 45, 37, 29, 10, 10, 8];

// 순회 / 비교대상

// 1
// 50 37
// 50 45
// 50 10
// 50 10
// 50 29
// 50 8

// 2
// 37 45
// 45 10
// 45 10
// 45 29
// 45 8

// 3
// 37 10
// 37 10
// 37 29
// 37 8

// 4
// 10 10
// 10 29
// 29 8

// 5
// 10 10
// 10 8

// 6
// 10 8
