let arrOne = [1, 2, 5, 7, 3, 9, 12, 43, 3253, 321];
let arrTwo = [23, 53, 12, 654, 432, 321];
function add (arr1) {
  let result = 0;
    for (let a = 0; a < arr1.length; a ++) {
      result += arr1 [a];
    } 
    return result;
  }



console.log (add(arrOne) + add(arrTwo));