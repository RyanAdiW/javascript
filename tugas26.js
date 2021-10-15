var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

function panggilIsFinite(x) {
	var a = isFinite(x);
	return a;
}

for (i = 0; i < angka.length; i++) {
	var nilai = panggilIsFinite(angka[i])

	if (nilai === true){
		console.log("Angka ", angka[i], " NOT Infinity");
	}else{
		console.log("Angka ", angka[i], " Infinity");
	}
}