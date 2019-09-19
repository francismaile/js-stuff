//
// const numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// const query = 14;
//
// function binarySearch(array, n, target) {
//   let min = 0;
//   let max = n-1;
//
//   do {
//     guess = Math.floor( (min + max) / 2);
//     if(array[guess] < target) min = guess + 1;
//     else max = guess - 1;
//     if(max < min) return -1;
//     console.log(guess);
//   } while( array[guess] !== target );
//
//   return guess;
// }
//
// result = binarySearch(numbers,numbers.length,17);
// console.log(result);

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var doSearch = function(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess;
    while( max >= min ) {
        guess = Math.floor( (min + max) / 2 );
        if( array[guess] === targetValue){ return guess; }
        else if(array[guess] < targetValue) { min = guess + 1; }
        else { max = guess - 1; }
    }
    return -1;
};
result = doSearch(primes, 7);
console.log(result);
