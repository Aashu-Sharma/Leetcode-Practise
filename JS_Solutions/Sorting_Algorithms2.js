let nums = [7, 4, 1, 15, 2, 5, 3, 9];

function mergeSort(arr, low, high) {
  if (low >= high) return;

  let mid = Math.floor((low + high) / 2);

  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);

  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] < arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  return arr;
}

// console.log(mergeSort(nums, 0, nums.length - 1));

nums = [4, 5, 1, 2, 7];
function place_at_correct_position(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i < high) {
      i++;
    }
    while (arr[j] > pivot && j > low) {
      j--;
    }
    if (i < j) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }

  let temp = arr[j];
  arr[j] = pivot;
  arr[low] = temp;
  return j;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let partition_index = place_at_correct_position(arr, low, high);
    quickSort(arr, low, partition_index - 1);
    quickSort(arr, partition_index + 1, high);
  }
  return arr;
}

console.log(quickSort(nums, 0, nums.length - 1));
