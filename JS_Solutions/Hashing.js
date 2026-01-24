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

// provide_nums(input_nums, lst);

const my_str = "aashutosh"
const characters_to_count = ["a", "s", "d", "u", "h"]


const find_character_count = (char, str) => {
  let new_list = new Array(26).fill(0);
  for (const c of str) {
    let index = c.charCodeAt(0) - 'a'.charCodeAt(0);
    new_list[index] += 1;
  }
  console.log(char, new_list[char.charCodeAt(0) - 'a'.charCodeAt(0)]);
}


const provide_character_to_count = (char_list, str) => {
  for (const char of char_list) {
    if (str.includes(char)){
      find_character_count(char, str);
    }else{
      console.log(char, 0);
    }
  }
}

provide_character_to_count(characters_to_count, my_str)