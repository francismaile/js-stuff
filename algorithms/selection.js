// selection sort from Grokking Algorithms
function findSmallest(arr) {
	let smallest = arr[0];
	let smallest_index = 0;
	for( var i = 1; i < arr.length + 1; i++) {
		if( arr[i] < smallest ) {
			smallest = arr[i];
			smallest_index = i;
		}
	}
	return smallest_index;
}

function selectionSort(arr) {
	newArr = [];
	let smallest;
	const arrLength = arr.length;
	for( var i = 0; i < arrLength; i++ ) {
		smallest = findSmallest(arr);
		newArr.push( arr.splice(smallest, 1)[0] );
	}
	return newArr;
}

console.log( selectionSort([5, 3, 6, 2, 10]) );
