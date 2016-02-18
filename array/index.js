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


console.log("\n- indexOf [ Brazil ]");
console.log(country.indexOf("Brazil"));
// 2


console.log("\n- splice updating");
country.splice(1, 1, "Netherlands");
console.log(country);
// [ 'USA', 'Netherlands', 'Brazil' ]


console.log("\n- splice removing");
country.splice(1, 1);
console.log(country);
// [ 'USA', 'Brazil' ]


console.log("\n- splice adding");
country.splice(1, 0, "Germany");
console.log(country);
// [ 'USA', 'Germany', 'Brazil' ]


country.push("Netherlands");
country.push("England");


console.log("\n- slice");
console.log(country.slice(1, 4));
// [ 'USA', 'Netherlands', 'Brazil' ]