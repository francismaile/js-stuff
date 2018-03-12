// quicksort

function qsort(arr, pvt) {
	let less = [];
	let greater = [];
	if(pvt) {
		const pivot = arr[Math.floor(Math.random() * arr.length )];
	} else {}
	const pivot = arr[0]; 
	if(arr.length <= 1) {
			return arr;
	} else {
		arr.forEach(function(elem) {
			if(elem < pivot){less.push(elem)}
		});
		arr.forEach(function(elem) {
			if(elem > pivot){greater.push(elem)}
		});
		return [...qsort(less), pivot, ...qsort(greater)]; 
	}
}

console.log(qsort([5,6,2,4,9,4,0,1,4]));

