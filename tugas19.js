function repeat() {
	var kata = "Semangat..."
	console.log(kata.repeat(5))
}

function repeatBintang(){
	var bintang = "*****"

	for (var i = 1; i <= 5; i++) {
		console.log(bintang.repeat(i))
	}
	for (var i = 4; i >= 1; i--) {
		console.log(bintang.repeat(i))
	}
}

// repeat();
repeatBintang();