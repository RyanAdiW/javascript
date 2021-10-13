function panggilMap() {
	var kota = ["jakarta", "bandung", "yogyakarta"];
	kota.map(function(item, index, array){
		console.log(item);
		console.log(index);
		console.log(array);
	})
}
panggilMap();