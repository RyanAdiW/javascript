// studi kasus
function panggilNestedArray(value) {
	for(i = 0; i < value.length; i++){
		console.log("id : ",value[i][0]);
		console.log("name : ",value[i][1]);
		console.log("company : ",value[i][2]);
	}
}

var nestedArray = [
	[1, "Mark Zuckerberg", "Facebook"],
	[2, "Elon Musk", "Tesla"],
	[3, "Bill Gates", "Microsoft"],
	[4, "Steve Jobs", "Apple"]
];

panggilNestedArray(nestedArray);

console.log("==================================");

// tugas
function panggilNestedArray2(value) {
	var hasil = [];
	for(i = 0; i < value[0].length; i++){		
		var newArr = [];
		for(j = 0; j < 3; j++){
			newArr.push(value[j][i]);
		}
		hasil.push(newArr);
	}
	console.log(hasil);
}

var nestedArray = [
	[1,2,3,4],
	['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
  	['Facebook', 'Tesla', 'Microsoft', 'Apple']
];

panggilNestedArray2(nestedArray);