let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

function spiralTraversalOfMatrix(matrix) {
  let result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (left <= right && top <= bottom) {
    let i = left;
    while (i <= right) {
      result.push(matrix[top][i]);
      i++;
    }
    top++;
    let j = top;
    while (j <= bottom) {
      result.push(matrix[j][right]);
      j++;
    }
    right--;
    let k = right;
    if (top <= bottom) {
      while (k >= left) {
        result.push(matrix[bottom][k]);
        k--;
      }
      bottom--;
    }
    let l = bottom;
    if (left <= right) {
      while (l >= top) {
        result.push(matrix[l][left]);
        l--;
      }
      left++;
    }
  }
  return result;
}
console.log(spiralTraversalOfMatrix(matrix));
