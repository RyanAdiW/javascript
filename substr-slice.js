function subString() {
	var nama = "123456789"
	console.log(nama.substr(3,5))
}

function slice() {
	var nama = "123456789"
	console.log(nama.slice(3,5))
}

function split() {
	var nama = "ini adalah data split"
	
	// syntax
	// string.split(separator, limit)
	console.log(nama.split(" ",4))
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

function konversi(){
	var con = new String("Belajar kuy")
	console.log(typeof con)
	console.log(con)

	var conf = con.toString()	// untuk mengonversi dari string object ke string primitive
	console.log(typeof conf)
	console.log(conf)

	var conf2 = con.valueOf()	// untuk mengonversi dari string object ke string primitive
	console.log(typeof conf2)
	console.log(conf2)

}

function indeksOf(){
	var ind = "aku ingin terbang bebas"

	// mengetahui indeks dari suatu char atau string
	console.log(ind.indexOf('b'))
}

function lastIndeks() {
	var last = "aku ingin terbang bebas dan berlari bebas"

	// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
	// lastIndexOf() searches the string from the end to the beginning, 
	// but returns the index s from the beginning, starting at position 0.
	// syntax string.lastIndexOf(searchvalue, start)
	console.log(last.lastIndexOf("bebas", 20))
}

function search() {
	var cari = "aku ingin terbang di angkasa"

	// The search() method searches a string for a specified value, and returns the position of the match.
	// The search value can be string or a regular expression.
	console.log(cari.search("di"))
}

function mat() {
	var isi = "saya pintar memasak soto"

	// The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
	console.log(isi.match("Saya"))
}

function rplc(argument) {
	var data = "baling baling bambu doraemon"

	// mengganti kata dalam string
	// string.replace(searchvalue, newvalue)
	console.log(data.replace("bambu", "besi"))
}

subString();
slice();
split();
trim();
concat();
include();
startEnd();
repeat();
konversi();
indeksOf();
lastIndeks();
search();
mat();
rplc();