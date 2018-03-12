const matrix = [];
matrix[0] = [1,2,3,4];
matrix[1] = [12,13,14,5];
matrix[2] = [11,16,15,6];
matrix[3] = [10,9,8,7];

let result = [[],[],[],[]];

let x = 0;
let y = 0;
let yinc = 0;
let xinc = 1;

const limit = 3;
let goal = (limit + 1) * (limit + 1);

while ( goal-- ) {
  result[y][x] = matrix[y][x];

	const yla = y + yinc;
	const xla = x + xinc;
	if( ( yinc !== 0 && (yla > limit || yla < 0) ) ||
			( xinc !== 0 && (xla > limit || xla < 0) ) ||
				result[yla][xla] !== undefined ) {
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

}

