let nums = [2, 1, 3, 2, 4];

function mergeSort(arr, low, high) {
   if(low >= high) return;

   let mid = Math.floor((low + high)/2);
   mergeSort(arr, low, mid);
   mergeSort(arr, mid+1, high);

   mergeList(arr, low, mid, high);
   return arr;
}

function mergeList(arr, low, mid, high){
  let left = low;
  let right = mid+1;
  let temp = [];

  while((left <= mid) && (right <= high)){
    if(arr[left] <= arr[right]){
      temp.push(arr[left]);
      left++;
    }else{
      temp.push(arr[right]);
      right++;
    }
  }

  while(left <= mid){
    temp.push(arr[left]);
    left++;
  }
  while(right <= high){
    temp.push(arr[right])
    right++;
  }

  for(let i = low; i <= high; i++){
    arr[i] = temp[i - low];
  }

  return arr;
}

// console.log(mergeSort(nums, 0, nums.length - 1));

nums = [4, 5, 1, 2, 7, 13, 10];

function quickSort(arr, low, high){
  if(low >= high) return;

  let part_index = place_at_correct_pos(arr, low, high);
  console.log(part_index)
  quickSort(arr, low, part_index - 1);
  quickSort(arr, part_index + 1, high);

  return arr;
};

function place_at_correct_pos(arr, low, high){
  let pivot = arr[low];
  let i = low;
  let j = high;

  while(i < j){
    while((arr[i] <= pivot) && (i < high)){
      i++;
    }

    while((arr[j] > pivot) && (j > low)){
      j--;
    }

    if(i < j){
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

console.log(quickSort(nums, 0, nums.length - 1));

// console.log(quickSort(nums, 0, nums.length - 1));
