function panggilForEach() {
	var data = ['a','b','c'];
	
	// array.forEach(function(currentValue, index, arr), thisValue)
		// currentValue	(Required): The value of the current element
		// index	(Optional): The array index of the current element
		// arr	(Optiona): The array object the current element belongs to
		// thisValue	Optional. A value to be passed to the function to be used as its "this" value.
			// If this parameter is empty, the value "undefined" will be passed as its "this" value

	data.forEach(function(item, index, array){
		console.log(item);
		console.log(index);
		console.log(array);
	})
}

panggilForEach();