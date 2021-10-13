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

panggilReverse();
panggilConcat();