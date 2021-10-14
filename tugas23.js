var bilangan = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

function lebihDari(angka) {
	return angka > 15;
}

console.log(bilangan.filter(lebihDari));