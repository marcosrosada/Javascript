var country = [
	{ name: "USA", continent: "America" }, 
	{ name: "Germany", continent: "Europe" }, 
	{ name: "Brazil", continent: "America"} ];


var result = country.map(function(item){
	return item.name;
});

console.log("Result name:", result);
// [ 'USA', 'Germany', 'Brazil' ]


var length = country.map(function(item){
	return item.name.length;
});

console.log("Result length:", length);
// [ 3, 7, 6 ]