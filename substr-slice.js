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

function trim(argument) {
	var nama = " ini adalah string "

	// menghilangkan spasi pada awal dan akhir string
	console.log(nama.trim())
}

function concat() {
	var nama1 = "ini kalimat pertama,"
	var nama2 = " dan ini kalimat kedua,"

	console.log(nama1.concat(nama2.concat(" lalu ini kalimat terakhir")))
}

subString();
slice();
split();
trim();
concat();