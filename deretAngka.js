// manipulasi deret angka
// apabila kelipatan 3 maka angkanya akan diganti dengan string "NIO"
// apabila kelipatan 5 maka angkanya akan diganti dengan string "MIC"

function deretAngka(n){
	var deret = ''
	for(i = 1; i <= n; i++){
		if((i%3 === 0) && (i%5 === 0)){
			deret += "NIOMIC "
		}
		else if(i%3 === 0){
			deret += "NIO ";
		}
		else if(i%5 === 0){
			deret += "MIC ";
		}
		else{
			deret += i + ' ';
		}
	}
	return deret;
}

console.log(deretAngka(10));
console.log("===================================");
console.log(deretAngka(20));
console.log("===================================");
console.log(deretAngka(30));