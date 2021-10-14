const array1 = [1,2,3,4];
const reducer = (a,b) => a*b;

console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer,2));