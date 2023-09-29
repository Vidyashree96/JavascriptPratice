/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
  var myArray = [];
  for(var i = 0; i < arr.length; i += size) {
    myArray.push(arr.slice(i, i+size));
  }
  return myArray;
};

arr = [1,2,3,4,5]
size = 1
console.log(chunk(arr,size))
console.log(arr.slice(1, 1+2))