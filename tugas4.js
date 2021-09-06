/*====================
  Tugas 4 JS - if-else
  ====================*/

var tinggiA = 20;
var tinggiB = 10;
var tinggiC = 30; 

function pengukurTinggi() {
	if (tinggiA>tinggiB){
		if(tinggiA>tinggiC){
			console.log("A paling tinggi");
		}else{
			console.log("C paling tinggi");
		}
	}else{
		if(tinggiB>tinggiC){
			console.log("B paling tinggi");
		}else{
			console.log("C paling tinggi");
		}
	}
}

function urutanTinggi() {
	if (tinggiA > tinggiB && tinggiA>tinggiC){
		if (tinggiB>tinggiC){
			console.log("tertinggi 1 (A):", tinggiA);
			console.log("tertinggi 2 (B):", tinggiB);
			console.log("tertinggi 3 (C):", tinggiC);
		}else{
			console.log("tertinggi 1 (A):", tinggiA);
			console.log("tertinggi 2 (C):", tinggiC);
			console.log("tertinggi 3 (B):", tinggiB);
		}
	}else if (tinggiB > tinggiC && tinggiB > tinggiA){
		if (tinggiC>tinggiA){
			console.log("tertinggi 1 (B):", tinggiB);
			console.log("tertinggi 2 (C):", tinggiC);
			console.log("tertinggi 3 (A):", tinggiA);
		}else{
			console.log("tertinggi 1 (B):", tinggiB);
			console.log("tertinggi 2 (A):", tinggiA);
			console.log("tertinggi 3 (C):", tinggiC);
		}
	}else if(tinggiC>tinggiA && tinggiC >tinggiB){
		if (tinggiA>tinggiB){
			console.log("tertinggi 1 (C):", tinggiC);
			console.log("tertinggi 2 (A):", tinggiA);
			console.log("tertinggi 3 (B):", tinggiB);
		}else{
			console.log("tertinggi 1 (C):", tinggiC);
			console.log("tertinggi 2 (B):", tinggiB);
			console.log("tertinggi 3 (A):", tinggiA);
		}
	}
}

pengukurTinggi();
urutanTinggi();