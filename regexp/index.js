var regExp = /9999-9999/;
var phone  = "9999-9999";

console.log("\nTEST:", regExp.test(phone));
console.log("EXEC:", regExp.exec(phone));


// \ to escape special charset
regExp	= /\(48\) 9999-9999/;
phone 	= "(48) 9999-9999";

console.log("\nTEST:", regExp.test(phone));
console.log("EXEC:", regExp.exec(phone));


// ^ to Start and $ end
regExp	= /^\(48\) 9999-9999$/;
phone 	= "(48) 9999-9999";

console.log("\nTEST:", regExp.test(phone));
console.log("EXEC:", regExp.exec(phone));


// Group
regExp	= /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
phone 	= "(48) 9876-1234";

console.log("\nTEST:", regExp.test(phone));
console.log("EXEC:", regExp.exec(phone));


// Multiple
regExp	= /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
phone 	= "(48) 9876-1234";

console.log("\nTEST:", regExp.test(phone));
console.log("EXEC:", regExp.exec(phone));


// Multiple with limit
regExp	= /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
phone 	= "(48) 99876-1234";

console.log("\nTEST:", regExp.test(phone));
console.log("EXEC:", regExp.exec(phone));


// hifen
regExp	= /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
phone 	= "(48) 998761234";

console.log("\nTEST:", regExp.test(phone));
console.log("EXEC:", regExp.exec(phone));


// Inside a context HTML
regExp	= /\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}/;
phone 	= "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

console.log("\nTEST:", regExp.test(phone));
console.log("EXEC:", regExp.exec(phone));


// Inside a context HTML in multiple cases
regExp	= /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;
phone 	= "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

console.log("\nTEST:", regExp.test(phone));
console.log("EXEC:", regExp.exec(phone));


// Replace from Group to \d and Space to \s
regExp	= /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/;
phone 	= "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

console.log("\nTEST:", regExp.test(phone));
console.log("EXEC:", regExp.exec(phone));


// Match strategy
regExp	= /\(\d{2}\)\s\d{4,5}-?\d{4}/;
phone 	= "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

console.log("\nMATCH:", phone.match(regExp));


// Match strategy with param G and returning Array
regExp	= /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
phone 	= "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

console.log("\nMATCH:", phone.match(regExp));


// Replace strategy changing HTML
regExp	= /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
phone 	= "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

console.log("\nReplace:", phone.replace(regExp, "Phone Number"));