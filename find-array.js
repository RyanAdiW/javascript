// array-find
// untuk mengambil nilai pertama kali yang muncul di atas x
var array1 = [5,12,8,120,44];

var found = array1.find(function(item){
	return item > 10;
})

console.log(found);

// array find index
// untuk mencari indeks dari suatu nilai tertentu
var array2 = [5,12,8,120,44];

function islargeNumber(element){
	return element > 13;
}

console.log(array2.findIndex(islargeNumber));