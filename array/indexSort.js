var country = [
	{ name: "USA", population: 318000 }, 
	{ name: "Germany", population: 80000 }, 
	{ name: "Brazil", population: 200000} ];


var resultAsc = country.sort(function(a, b){
	return a.population - b.population;
}, 0);

console.log("Result Asc\n", resultAsc);
/*[ { name: 'Germany', population: 80000 },
  	{ name: 'Brazil', population: 200000 },
  	{ name: 'USA', population: 318000 } ]*/

var resultDesc = country.sort(function(a, b){
	return b.population - a.population;
}, 0);

console.log("\nResult Desc\n", resultDesc);
/*[ { name: 'USA', population: 318000 },
  	{ name: 'Brazil', population: 200000 },
  	{ name: 'Germany', population: 80000 } ]*/