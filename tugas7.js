var tinggiBadan = [170,168,180,176,160,169,188,145,171,159];

// looping biasa
console.log("looping biasa")
for(i = 0; i<9; i++){
	console.log(tinggiBadan[i]);
}

console.log();
console.log("===============");
console.log();

// loopiing for-of
console.log("looping for-of")
for(let x of tinggiBadan){
	console.log(x);
}