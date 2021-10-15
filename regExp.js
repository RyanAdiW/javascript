// test methode
// contoh
function panggilRegexp() {
	let data = "Belajar Satu Tahun Bersama Niomic";

 	console.log(/Satu/.test(data))
}

panggilRegexp()

console.log("=========================");

// tugas
function panggilRegexp(value) {
   let data2 = ["Belajar html", "Belajar css"];
   var re = new RegExp(value);

   if (re.test(data2)===true) {
   		console.log(value);
   }
   else{
   		console.log("Belajar");
   }
}

panggilRegexp("Belajar html");
panggilRegexp("Belajar javascript");
panggilRegexp("Belajar css");
panggilRegexp("Belajar php");

console.log("=========================");
/* =================================================
================================================== */

// exec methode - untuk mengembalikan string yang ditemukan atau yang memiliki kecocokan
function panggilExec(){
	let data3 = "Belajar Satu Tahun Bersama Niomic";
	let str = new RegExp("Niomic");

	return str.exec(data3);
}
console.log(panggilExec());

console.log("=========================");
/* =================================================
================================================== */

// replace methode - menggantikan sebuah string
function panggilReplace() {
	let data = "Belajar Satu Tahun Bersama Niomic";
	console.log(data.replace(/Satu/, "1"))
}

panggilReplace();

console.log("=========================");
/* =================================================
================================================== */

// flags
function panggilRegexp(value) {
	let str = "abcdefghijklmnopqrstuvwxyz";
	console.log(str.search(/K/))
	console.log(str.search(/K/i))
	console.log(str.search(/k/i))
}

panggilRegexp()

console.log("=========================");
/* =================================================
================================================== */
// token reg expression

// mencari single karakter, kecuali new line atau line terminator
var s = "Ini ibu budi \n bukan bapaknya";
var re = /./g;
console.log(s.match(re));

console.log("=========================");
// untuk mencari karakter titik
var s2 = "haloo..";
var re2 = /\./g;
console.log(s2.match(re2));

console.log("=========================");
// mencari angka
var s3 = "asadsf123 sdf%$#.";
console.log(s3.match(/\d/g));
// mencari selain angka
console.log(s3.match(/\D/g));
// mencari karakter kecuali whitespace karakter
console.log(s3.match(/\S/g));
// mencari whitespace karakter
console.log(s3.match(/\s/g));