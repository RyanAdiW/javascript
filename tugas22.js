function stringToArray() {
	var kalimat = "Saya ingin belajar bersama";
	arr = kalimat.split(" ")
	return arr;
}

stringToArray().forEach(function(item,index){
	console.log("Item : ",item, "index ke ", index)
})