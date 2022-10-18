function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, index, i) {
    let temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
  }

  let pivot = arr[start];
  let swapIndx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndx++;
      swap(arr, swapIndx, i);
    }
  }

  swap(arr, start, swapIndx);

  return swapIndx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
