const array1 = [1,2,3,4];
const reducer = (a,b) => a*b;

console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer,2));

// array reduce right
const array2  = [[0,1], [2,3], [4,5]].reduceRight(
	(a,b) => a.concat(b)
)
console.log(array2);