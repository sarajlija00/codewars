let numbers = [3, 5, 7, 11, 15, 17, 25, -26, -28, -35, -40];
function sum (array) {
  if ( !array || array.length == 0){
    return [];
  }
  let result = [0,0];
  for (let a = 0; a < array.length; a ++) {
    if (array [a] > 0){
        result [0] += array [a];
    } 
    else {
        result [1] += array [a];
    }
  }
  return result;
} 
console.log (sum (numbers));
