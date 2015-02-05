/* whenever you see: exports.example = example = function() { example.example(example()) };
   we are packaging an export for node + making a regular javascript function
*/

exports.add = add = function(things) {
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

exports.combineArray = combineArray = function(things1, things2) {
	var newArray = new Array();
	for(thing in things1) newArray.push(things1[thing]);
	for(thing in things2) newArray.push(things2[thing]);
	return newArray;
}

exports.average = average = function(things) {
	var sum	= 0,
	terms	= things.length;
	for(thing in things) sum += things[thing];
	return sum / terms;
}

exports.cleanArray = cleanArray = function(things) {
	var used		= new Array(),
		newArray	= new Array();
	for(thing in things) {
		if(!(used.indexOf(things[thing]) >= 0)) {
			used.push(things[thing]);
			newArray.push(things[thing]);
		}
		console.log(newArray);
	}
	newArray.sort();
	return newArray;
}

exports.removeAllOf = removeAllOf = function(things, remove) {
	var newArray = new Array();
	for(thing in things) {
		if(things[thing] != remove) newArray.push(things[thing]);
	}
	return newArray;
}
