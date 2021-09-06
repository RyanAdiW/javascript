/*=========================================
  penulisan fungsi
  ========================================= */

// penulisan function model lama
function jalanSatu(){
	console.log("Jalan satu");
}

const jalanDua = function(){
	console.log("Jalan dua");
}

jalanSatu();
jalanDua();

// penulisan function model baru
const jalanTiga = ()=>{
	console.log("Jalan tiga")
}

jalanTiga();

/*=========================================
  mengembalikan nilai pada sebuah fungsi
  ========================================= */
function ambil() {
	var angka = 10;
	return angka;
}

console.log(ambil());

/*=========================================
  membuat parameter pada fungsi
  ========================================= */
function mintaData(x, y, z) {
	console.log(x,y,z);
}

mintaData(10,11,12);

// deffault parameter
function deffaultParam(a="ini deffault parameter") {
	console.log(a)
}
deffaultParam();