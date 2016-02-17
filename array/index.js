var country = ["USA", "Germany", "Brazil"];

console.log("\n- Root");
console.log(country);


console.log("\n- push");
country.push("Netherlands");
console.log(country);
// [ 'USA', 'Germany', 'Brazil', 'Netherlands' ]


console.log("\n- pop");
country.pop("Netherlands");
console.log(country);
// [ 'USA', 'Germany', 'Brazil' ]

console.log("\n- unshift");
country.unshift("Netherlands");
console.log(country);
// [ 'Netherlands', 'USA', 'Germany', 'Brazil' ]


console.log("\n- shift");
country.shift("Netherlands");
console.log(country);
// [ 'USA', 'Germany', 'Brazil' ]


console.log("\n- indexOf");
console.log(country.indexOf("Brazil"));
// 2


console.log("\n- splice");
country.splice(1, 1);
console.log(country);
// [ 'USA', 'Brazil' ]

//console.log(country.splice(1, 1));