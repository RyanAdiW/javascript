// array-reverse (untuk membalik array)
function panggilReverse() {
	var kota = ["jakarta", "bandung", "temanggung", "yogyakarta"];
	console.log(kota);
	console.log(kota.reverse());
}

// array-concat (untuk menggabungkan 2 array)
function panggilConcat() {
	var kota1 = ["jakarta", "bandung", "temanggung", "yogyakarta"];
	var kota2 = ["surabaya", "depok", "magelang", "solo"];

	console.log(kota1.concat(kota2))
}

// array-slice
// The slice() method returns selected elements in an array, as a new array.
// slice() selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
// syntax: array.slice(start, end)
function panggilSlice() {
	var data = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

	console.log(data.slice(1,5))
}

// array-join
// mengubah array menjadi string
function panggilJoin() {
	var kota = ["jakarta", "bandung", "temanggung", "yogyakarta"];
	console.log(kota.join(", "))
}

// array-split
// menggabungkan data string menjadi array
function panggilSplit() {
	var kota = "kita sedang makan malam";
	console.log(kota.split(" "))	
}

//array-indexOf
// untuk pencarian data pada array
function panggilIndexOf(argument) {
	var kota = ["jakarta", "bandung", "temanggung", "yogyakarta"];
	console.log(kota.indexOf("temanggung"))
}

panggilReverse();
panggilConcat();
panggilSlice();
panggilJoin();
panggilSplit();
panggilIndexOf();