/*======================
  Penulisan nested array
  ======================*/

function panggilNestedArray() {
	var dataNama = [["mangga", "jeruk", "melon"],
					["mawar", "melati", "tulip"],
					["kucing", "gajah", "monyet"]]

	console.log(dataNama[0][2]);	// mengambil array indeks ke 2 di array indeks ke 0 -> melon.
}

panggilNestedArray();

/*=======================================
  pemanggilan elemen menggunakan looping
  =======================================*/

  var arrayAngka = [1,2,3,4,5,6,7,8,9];

  for(i = 0; i <= arrayAngka.length; i++ ){
  	console.log(arrayAngka[i]);
  }