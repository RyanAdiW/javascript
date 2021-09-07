// syntax dasar
function panggilObjects(){
	var mobil = {
		type: "sedan",
		harga: 500000000,
		warna: 'putih',
		tahun: [2010,2011,2018,2020]
	}

	console.log(mobil.harga);

	// pemanggilan elemen array dalam objecct
	console.log(mobil.tahun[0]);
}

panggilObjects();