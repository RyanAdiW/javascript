const angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

function panggilSort() {
	return angka.sort();
}

console.log("Sebelumnya : ", angka);
console.log("Ascending : ", panggilSort());
console.log("Descending : ", panggilSort().reverse());