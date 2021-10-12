function subString() {
	var nama = "123456789"
	console.log(nama.substr(3,5))
}

function slice() {
	var nama = "123456789"
	console.log(nama.slice(3,5))
}

function split() {
	var nama = "ini adalah data"
	
	// syntax
	// string.split(separator, limit)
	console.log(nama.split(" ",2))
}

function trim() {
	var nama = " ini adalah string "

	// menghilangkan spasi pada awal dan akhir string
	console.log(nama.trim())
}

function concat() {
	var nama1 = "ini kalimat pertama,"
	var nama2 = " dan ini kalimat kedua,"

	console.log(nama1.concat(nama2.concat(" lalu ini kalimat terakhir")))
}

function include() {
	var inc = "ini adalah include"

	// The includes() method returns true if a string contains a specified string, otherwise false.
	console.log(inc.includes("adalah"))
}

function startEnd() {
	var starte = "Aku pandai memasak bakso"

	console.log(starte.startsWith("Aku"))
	console.log(starte.endsWith("bakso"))

}

function repeat() {
	var isi = "Ayo pakai masker"
	console.log(isi.repeat(2))
}

subString();
slice();
split();
trim();
concat();
include();
startEnd();
repeat();