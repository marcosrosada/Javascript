var country = [
	{ name: "USA", continent: "America" }, 
	{ name: "Germany", continent: "Europe" }, 
	{ name: "Brazil", continent: "America"} ];


var result = country.some(function(item){
	return item.continent === "America";
});

console.log("Result:", result);
// true