const lst = [1, 3, 1, 2, 2, 3, 4, 13];

const input_nums = [1, 2, 3, 10, 12, 13];

const find_count_of_elements = (n, list) => {
    let new_list = new Array(14).fill(0);
    for (const num of list) {
        new_list[num] += 1;
    }
    console.log(n, new_list[n]);
};

const provide_nums = (input, list) => {
  for (const num of input) {
    if (list.includes(num)) {
      find_count_of_elements(num, list);
    }else{
        console.log(num, 0);
    }
  }
};

provide_nums(input_nums, lst);
