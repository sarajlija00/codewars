let elements = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
let arr = [];
function remove (array) {
  for (a = 0; a < array.length; a = a +2) {
    arr.push (array [a]);
  }
  return arr;
}
console.log (remove(elements));
