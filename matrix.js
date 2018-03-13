const matrix = [];
matrix[0] = [1,2,3,4];
matrix[1] = [5,6,7,8];
matrix[2] = [9,10,11,12];
matrix[3] = [13,14,15,16];

function printSpiral( arr ) {
  let result = [];

  let x = 0;
  let y = 0;
  let yinc = 0;
  let xinc = 1;

  const limit = 3;
  let goal = (limit + 1) * (limit + 1);

  while ( goal-- ) {
    result.push(arr[y][x]);

  	const yla = y + yinc;
  	const xla = x + xinc;
  	if( ( yinc !== 0 && (yla > limit || yla < 0) ) ||
  			( xinc !== 0 && (xla > limit || xla < 0) ) ||
  				result.includes(arr[yla][xla]) ) {
  		if( xinc !== 0 ) {
  			yinc = xinc;
  			xinc = 0;
  		} else if (yinc !== 0) {
  			xinc = -(yinc);
  			yinc = 0;
  		}
  	}

  	x = x + xinc;
  	y = y + yinc;
  } // end while
  return result.join(' ');
} // end printSpiral

console.log( printSpiral(matrix) );


