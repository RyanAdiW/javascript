function regex(){
	let s = "Para tetua adat mendiskusikan masalah kejahatan yang terjadi di rumah adat";
	let re = /[es]/g;

	console.log(s.match(re));
}
regex();