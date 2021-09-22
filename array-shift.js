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

console.log("========================================================")

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

console.log("========================================================")

// push utuk memasukkan data ke dalam array
function panggilPush() {
	var data = [1,2,3,4,5,6,7,8];
	console.log(data);
	console.log("=========");
	data.push(9);
	return data;
}

console.log(panggilPush());