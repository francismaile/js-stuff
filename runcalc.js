/*
Calculate marathon running pace or time given a pace or distance given pace and time.
https://www.hillrunner.com/calculators/suggested-training-paces/
http://www.coolrunning.com/engine/4/4_1/96.shtml
*/

const toSeconds = timeStr => +(timeStr.split(':').reduce((acc,time) => (60 * acc) + +time))

calcTime = function(pace, distance) {
	// given distance and pace, calculate time it will take to complete the distance
	// pace is in format: mm:ss per distance unit
	const time = (toSeconds(pace) * distance);
	return new Date(time * 1000).toISOString().substring(11, 19).replace(/^0+/, '');
}

console.log(calcTime('10:30', 26.2));

calcPace = function (hms, distance) {
	// given time and distance, calculate pace
	const time = toSeconds(hms) / distance;
	return new Date(time * 1000).toISOString().substring(14, 19).replace(/^0+/, '');
}
console.log(calcPace('4:30:20',26.21875));

calcDistance = function (pace, hms) {
	// given a pace and a time, calculate the distance covered
	// pace: MM:SS; time: HH:MM:SS
	return toSeconds(hms) / toSeconds(pace) 
}
console.log(calcDistance('10:30', '4:30:30'));
