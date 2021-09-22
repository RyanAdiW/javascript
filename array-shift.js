//  shift untuk menghapus data array paling depan
function panggilShift() {
	var kota = ["jakarta", "bandung", "malang", "surabaya", "makasar"];
	console.log(kota);
	console.log("=========");

	var kota2 = kota.shift();
	console.log(kota2);

	return kota;
}

console.log(panggilShift());

console.log("=====================================================")

// pop untuk menghapus data array paling belakang
function panggilPop() {
	var kota = ["jakarta", "bandung", "malang", "surabaya", "makasar"];
	console.log(kota);
	console.log("=========");

	var kota2 = kota.pop();
	console.log(kota2);

	return kota;
}

console.log(panggilPop());