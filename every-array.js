let products = [
	{name: "apple", type: "fruit"},
	{name: "monitor", type: "computer"},
	{name: "mango", type: "fruit"},
	{name: "table", type: "furniture"}
];

console.log(products.every(item => item.type === "fruit"));