function regex() {
	let data = "Belajar menimba ilmu programming bersama Niomic";
	let re = new RegExp("bersama");

	console.log(re.exec(data))
}
regex();