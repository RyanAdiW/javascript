var umur = ['16','15','22','24','25'];

function umurDewasa(umur) {
	return umur >= 17;
}

console.log(umur.filter(umurDewasa));