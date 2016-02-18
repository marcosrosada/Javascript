var country = [
	{ name: "USA", population: 318000 }, 
	{ name: "Germany", population: 80000 }, 
	{ name: "Brazil", population: 200000} ];


var result = country.reduce(function(previous, current){
	return previous + current.population;
}, 0);

console.log("Result name:", result);
// 