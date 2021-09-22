function panggilBuah(argument) {
	var nama = ["pisang", "jeruk", "apel", "mangga"];
	console.log(nama);

	nama.pop();
	console.log(nama);

	nama.shift();
	return nama;
}

console.log(panggilBuah());