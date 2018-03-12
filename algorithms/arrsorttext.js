let arr = Array(2,8,3,7,4,6,7,10,23,1,50,22,18);
console.log(arr);
function sortArr(array) {
  return array.sort( (a, b) => {
      if (a === b ) return 0;
      if( a < b ) return -1;
      if( a > b ) return 1;
    });
}
arr2 = [];
arr = sortArr(arr);
console.log('sorted:', arr);
