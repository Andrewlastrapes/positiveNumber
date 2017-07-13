// Just the positives 

function positiveNumbers(numbers){
	posnumbers = []
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] > 0) {
			posnumbers.push(numbers[i])
		}
		
	}
	return(posnumbers)
}


console.log(positiveNumbers([345, 54, 5, 45, -4, - 34, -4, 34, 41, 123]))