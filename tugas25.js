var deret = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

function panggilSort() {
	return deret.sort();
}

function panggilFilter(angka) {
	return angka > 10;
}

console.log("Sebelumnya : ", deret);
console.log("Ascending : ", panggilSort());
console.log("Descending : ", panggilSort().reverse());
console.log("Filter > 10 : ", deret.filter(panggilFilter));
