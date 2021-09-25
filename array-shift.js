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

console.log("========================================================");

// push untuk memasukkan data ke dalam array
function panggilPush() {
	var data = [1,2,3,4,5,6,7,8];
	console.log(data);
	console.log("=========");
	data.push(9);
	return data;
}

console.log(panggilPush());

console.log("========================================================");

// splice untuk menyisipkan dan menghapus data pada indeks yang kita mau
// syntax = array.splice(index yg mau disisipkan, indeks yg mau dihapus, item1, ....., itemX)
function panggilSplice() {
	var kota = ["jakarta", "bandung", "malang", "surabaya"];
	console.log(kota);
	// untuk menambahkan data pada indeks ke 0
	// kota.splice(0,0,"temanggung");
	
	// untuk meghapus data pada indeks 1
	kota.splice(0,1);
	
	return kota;
}

console.log(panggilSplice());