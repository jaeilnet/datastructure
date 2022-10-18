// 의사코드만으로 짜본 코드

function sort(arr) {
  console.log(JSON.stringify(arr), "시작");

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        console.log(arr[i], arr[j]);

        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
    console.log(JSON.stringify(arr));
  }

  return arr;
}

sort([1, 4, 2, 5, 8, 6, 7, 3]);

// [1,4,2,5,8,6,7,3] 시작

// [1,4,2,5,8,6,7,3]
// 4 2 // swap

// [1,2,4,5,8,6,7,3]
// 4 3 // swap

// [1,2,3,5,8,6,7,4]
// 5 4 // swap

// [1,2,3,4,8,6,7,5]
// 8 6 // swap
// 6 5 // swap

// [1,2,3,4,5,8,7,6]
// 8 7 // swap
// 7 6 // swap

// [1,2,3,4,5,6,8,7]
// 8 7 // swap

// [1,2,3,4,5,6,7,8] 종료
