function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, indx, i) {
    let temp = arr[indx];
    arr[indx] = arr[i];
    arr[i] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    // pivot = arr[start] = arr[0]
    // arr[i] = arr[start +1] = arr[1]
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // console.log(JSON.stringify(arr));
    let pivotIndex = pivot(arr, left, right);

    // [4, 8, 2, 1, 5, 7, 6, 3];
    // console.log(pivotIndex, arr[pivotIndex]);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
