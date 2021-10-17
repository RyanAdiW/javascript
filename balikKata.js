// fungsi untuk membalikkan sebuah kata

// metode pertama menggunakan methode split(), reverse() dan join()
function balikKata(input) {
	var arr = input.split('');
	var revArr = arr.reverse();
	hasil = revArr.join('');
	return hasil;
}

// testCase
console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));

console.log("=====================================");


// metode kedua menggunakan looping
function balikKata2(input) {
	var newString = "";

	for(i = input.length-1; i >= 0; i--){
		newString += input[i];
	}
	return newString;
}

// testCase
console.log(balikKata2("Niomic!"));
console.log(balikKata2("JavaScript"));
console.log(balikKata2("alohahola"));
console.log(balikKata2("Jawa_Barat"));