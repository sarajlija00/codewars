let numbers = [1, 4, -7, 12, -43, 64, -13, 19];
function sumOfPositive (array){
    let sum = 0;
    for (a = 0; a < array.length; a ++) {
        if (array [a] > 0) {
            sum += array[a];
        } 
    }
    return sum;
}

console.log(sumOfPositive(numbers));