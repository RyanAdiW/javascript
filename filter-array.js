let peoples = [
	{
		name: "Andi",
		gender: "male"
	},
	{
		name: "Siti",
		gender: "female"
	},
	{
		name: "Cindy",
		gender: "female"
	}
];

let female = peoples.filter(item =>{
	return item.gender === "female";
})

console.log(female);

// contoh di w3school
var umur = ['16','15','22','24','25'];

function umurDewasa(umur) {
	return umur >= 17;
}

console.log(umur.filter(umurDewasa));