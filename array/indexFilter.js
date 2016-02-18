var country = [
	{ name: "USA", continent: "America" }, 
	{ name: "Germany", continent: "Europe" }, 
	{ name: "Brazil", continent: "America"} ];


var result = country.filter(function(item){
	return item.continent === "America";
});

console.log("Result\n", result);
// [ { name: 'USA', continent: 'America' },
//   { name: 'Brazil', continent: 'America' } ]