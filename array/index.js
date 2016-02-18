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


console.log("\n- slice");
console.log(country.slice(0, 2));
// [ 'USA', 'Germany' ]


console.log("\n- reverse");
console.log(country.reverse());
// [ 'Brazil', 'Germany', 'USA' ]
console.log(country.reverse());


console.log("\n- sort");
country.sort();
console.log(country);
// [ 'Brazil', 'Germany', 'USA' ]


console.log("\n- join");
var join = country.join(";");
console.log(join);
// Brazil;Germany;USA


console.log("\n- split");
var split = join.split(";");
console.log(split);
// [ 'Brazil', 'Germany', 'USA' ]