// const printSqrStars = (n) => {
//     for(let i = 0; i < n; i++){
//         let row = "";
//         for(let j = 0; j < n; j++){
//             row += "*";
//         }
//         console.log(row);
//     }
// }

// printSqrStars(7);

// const printRightAngledTriangle = (n) => {
//     for(let i = 0; i < n; i++){
//         let row = "";
//         for(let j = 0; j <= i; j++){
//             row += "*";
//         }
//         console.log(row);  
//     }
// }
// printRightAngledTriangle(5);

// const printRightAngledNumberTriangle = (n) => {
//     for(let i = 1; i <= n; i++){
//         let row = "";
//         for(let j = 1; j <= i; j++ ){
//             row+= j;
//         }
//         console.log(row);
//     }
// }
// printRightAngledNumberTriangle(5)

// const printRightAngledNumberTriangleII = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += i;
//         }
//         console.log(row);
//     }
// }
// printRightAngledNumberTriangleII(5);

// const InvertedRightAngledTriangle = (n) => {
//     for(let i = n; i >= 1; i--){
//         let row = "";
//         for(let j = 1; j <= i; j++){
//             row += "*";
//         }
//         console.log(row);
//     }
// }
// InvertedRightAngledTriangle(5);

// const InvertedRightNumberTriangle = (n) => {
//     for(let i = n; i>=1; i--){
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += j;
//         }
//         console.log(row);
//     }
// }
// InvertedRightNumberTriangle(5);

// const printStarPyramid = (n) => {
//     for(let i = 1; i <= n; i++){
//         let row = "";
//         for(let j = 1; j <= n - i; j++){
//             row += " ";
//         }
//         for(let k = 1; k <= ((2*i) - 1); k++){
//             row += "*";
//         }
//         for(let l = 1; l <= n - 1; l++){
//             row += " ";
//         }
//         console.log(row);
//     }
// }

// printStarPyramid(5);

// const printNumStarPyramid = (n) => {
//     for(let i = 1; i <= n; i++){
//         let row = "";
//         for(let j = 1; j <= n - i; j++){
//             row += " ";
//         }
//         for(let k = 1; k <= ((2*i) - 1); k++){
//             row += k;
//         }
//         for(let l = 1; l <= n - 1; l++){
//             row += " ";
//         }
//         console.log(row);
//     }
// }

// printNumStarPyramid(5);

// const InvertedStarPyramid = (n) => {
//     for(let i = n; i >= 1; i--){
//         let row = "";
//         for(let j = 1; j <= n - i; j++){
//             row += " ";
//         }
//         for(let k = 1; k <= ((2*i) - 1); k++){
//             row += "*";
//         }
//         for(let l = 1; l <= n - i; l++){
//             row += " ";
//         }
//         console.log(row);
//     }
// }

// InvertedStarPyramid(5);

// const DiamondStarPattern = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let rows = "";
//         for(let j = 1; j <= n - i; j++){
//             rows += " ";
//         }
//         for (let k = 1; k <= ((2*i) - 1); k++) {
//             rows += "*";
//         }
//         for (let l = 1; l <= n - 1; l++) {
//             rows += " ";
//         }
//         console.log(rows);
//     }
//     for (let a = n; a >= 1; a--) {
//         let rows = "";
//         for(let x = 1; x <= n - a; x++){
//             rows += " ";
//         }
//         for(let y = 1; y <= ((2*a) - 1); y++) {
//             rows += "*";
//         }
//         for(let z = 1; z <= n - a; z++){
//             rows += " ";
//         }
//         console.log(rows);
//     }
// }

// DiamondStarPattern(5);

// const halfDiamondStarPattern = (n) => {
//     for(let i = 1; i <= n; i++){
//         let rows = "";
//         for(let j = 1; j <= i; j++){
//             rows += "*";
//         }
//         console.log(rows);
//     }
//     for(let a = n - 1; a >= 1; a--){
//         let rows = "";
//         for (let x = 1; x <= a; x++) {
//             rows += "*";
//         }
//         console.log(rows);
//     }
// }

// halfDiamondStarPattern(6);

// const BinaryNumberPattern = (n) => {
//     for(let i = 1; i <= n; i++){
//         let rows = "";
//         for(let j = 1; j <= i; j++){
//             if((i+j) % 2 === 0){
//                 rows+= 1;
//             }else{
//                 rows+= 0;
//             }
//         }
//         console.log(rows);
//     }
// }

// BinaryNumberPattern(6);

// const NumberCrownPattern = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let rows = "";
//         for (let j = 1; j <= i; j++) {
//             rows += j
//         }
//         for (let k = i; k < n; k++) {
//             rows += " "
//         }
//         for(let l = n; l > i; l--){
//             rows += " ";
//         }
//         for (let m = i; m >= 1; m--) {
//             rows += m;
//         }
//         console.log(rows);
//     }
// }
// NumberCrownPattern(4);

// const IncreasingNumberTrianglePattern = (n) => {
//     let num = 1;
//     for(let i = 1; i <= n; i++){
//         let rows = "";
//         for(let j = 1; j <= i; j++){
//             rows += num + " ";
//             num++;
//         }
//         console.log(rows);
//     }
// }

// IncreasingNumberTrianglePattern(10);

// const IncreasingTriangleLetterPattern = (n) => {
//     for(let i = 1; i <= n; i++){
//         let charcode = 65;
//         let rows = "";
//         for(let j = 1; j <= i; j++){
//             rows += String.fromCharCode(charcode);
//             charcode++;
//         }
//         console.log(rows);
//     }
// }
// IncreasingTriangleLetterPattern(5);

// const ReverseTriangleLetterPattern = (n) => {
//     for(let i = n; i >= 1; i--){
//         let charcode = 65;
//         let rows = "";
//         for(let j = 1; j <= i; j++){
//             rows += String.fromCharCode(charcode);
//             charcode++;
//         }
//         console.log(rows);
//     }
// }

// ReverseTriangleLetterPattern(5);

// const AlphaRampPattern = (n) => {
//     let charcode = 65;
//     for(let i = 1; i <= n; i++){
//         let rows = "";
//         for(let j = 1; j <= i; j++){
//             rows += String.fromCharCode(charcode);
//         }
//         charcode++;
//         console.log(rows);
//     }
// }

// AlphaRampPattern(5);

// const AlphaHillPattern = (n) => {
//     for(let i = 1; i <= n; i++){
//         let charcode = 65;
//         let rows = "";
//         for(let j = 1; j <= n - i; j++){
//             rows += " ";
//         }
//         for(let k = 1; k <= ((2*i) - 1); k++){
//             rows += String.fromCharCode(charcode);  
//             if(k >= i){
//                 charcode--;
//             }else{
//                 charcode++;
//             }
//         }
//         for(let l = 1; l <= n - i; l++){
//             rows += " ";
//         }
//         console.log(rows);
//     }
// }

// AlphaHillPattern(5);

// const AlphaTrianglePattern = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let charcode = 65 + n - i;
//         let rows = "";
//         for (let j = 1; j <= i; j++) {
//             rows += String.fromCharCode(charcode)
//             charcode++;
//         }
//         console.log(rows);
//     }
// }

// AlphaTrianglePattern(10);

// const SymmetricVoidPattern = (n) => {
//     for(let i = n; i >= 1; i--){
//         let rows = "";
//         for(let j = 1; j <= i; j++){
//             rows += "*";
//         }
//         for(let k = 1; k <= n - i; k++){
//             rows += " ";
//         }
//         for(let l = 1; l <= n - i; l++ ){
//             rows += " ";
//         }
//         for(let m = 1; m <= i; m++){
//             rows += "*";
//         }
//         console.log(rows);
//     }
//     for(let a = 1; a <= n; a++){
//         let rows = "";
//         for(let b = 1; b <= a; b++){
//             rows += "*";
//         }
//         for(let c = 1; c <= n - a; c++){
//             rows += " ";
//         }
//         for(let d = 1; d <= n - a; d++){
//             rows += " ";
//         }
//         for(let e = 1; e <= a; e++){
//             rows += "*";
//         }
//         console.log(rows);
//     }
// }

// SymmetricVoidPattern(5);

// const SymmetricButterFlyPattern = (n) => {
//     for(let i = 1; i <= n; i++){
//         let rows = "";
//         for(let j = 1; j <= i; j++){
//             rows += "*";
//         }
//         for(let k = 1; k <= n - i; k++){
//             rows += " ";
//         }
//         for(let l = 1; l <= n - i; l++){
//             rows += " ";
//         }
//         for(let m = 1; m <= i; m++){
//             rows += "*";
//         }
//         console.log(rows);
//     }
//     for(let a = n - 1; a >= 1; a--){
//         let rows = "";
//         for(let x = 1; x <= a; x++){
//             rows += "*";
//         }
//         for(let y = 1; y <= n - a; y++){
//             rows += " ";
//         }
//         for(let z = 1; z <= n - a; z++){
//             rows += " ";
//         }
//         for(let p = 1; p <= a; p++){
//             rows += "*";
//         }
//         console.log(rows);
//     }
// }
// SymmetricButterFlyPattern(7);

// const hollowSquarePattern = (n) => {
//     for(let i = 0; i < n; i++){
//         let rows = "";
//         for(let j = 0; j < n; j++){
//             if(j === 0 || j === n - 1 || i === 0 || i === n - 1){
//                 rows += "*";
//             }else{
//                 rows += " ";
//             }
//         }
//         console.log(rows);
//     }
// }
// hollowSquarePattern(10);

// const NumberPattern = (n) => {
//     for(let i = 0; i < ((2*n) - 1); i++){
//         let rows = "";
//         for(let j = 0; j < ((2*n) - 1); j++){
//             let top = i; 
//             let left = j;
//             let right = ((2*n) - 2) - j;
//             let bottom = ((2*n) - 2) - i;

//             let minDist = Math.min(top, bottom, left, right);
//             rows += (n - minDist) + " ";
//         }
//         console.log(rows);
//     }
// }
// NumberPattern(3);