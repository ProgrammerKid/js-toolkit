/* whenever you see: exports.example = example = function() { example.example(example()) };
   we are packaging an export for node + making a regular javascript function
*/

exports.addAll = addAll = function(things) {
	var sum	= 0;
	for(thing in things)
		sum += things[thing];
	return sum;
};

exports.getLowest = getLowest = function(things) {
	var lowest = things[0]; /* example: var hi = [1, 5, 16, 8] ... if lowest = 0... then then the lowest number will be 0... which is why we are taking a # from the array */
	for(thing in things) lowest = (things[thing] < lowest) ? things[thing] : lowest;
	return lowest;
};

exports.getGreatest = getGreatest = function(things) {
	var greatest = things[0];
	for(thing in things) greatest = (things[thing] > greatest) ? things[thing] : greatest;
	return greatest;
}
