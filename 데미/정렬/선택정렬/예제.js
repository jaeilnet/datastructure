// 의사코드

// 1. 최소 값 지정 :배열에서 다른 모든 값들과 비교해서 가장 작은 값의 인덱스를 지정한다.
// 2. 스와핑 : 최소 값을 반복문의 현재 인덱스와 바꿔준다.
// 3. 최적화 : 현재 인덱스와 최소 값이 같을 때는 스와핑을 해주지 않는다.

// 시간 복잡도
// O(N^2)

function selectionSort(arr) {
  if (arr.length <= 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);

// 10 34
// 17 22
// 19 34
// 22 34

// [0, 2, 10, 22, 34, 19, 17]
// [0, 2, 10, 17, 34, 19, 22]
// (0, 2, 10, 17, 19, 34, 22]
// [0, 2, 10, 17, 19, 22, 34];
