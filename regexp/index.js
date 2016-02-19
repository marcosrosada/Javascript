var regExp = /9999-9999/;
var phone  = "9999-9999";

console.log("\nEXEC:", regExp.exec(phone));
console.log("TEST:", regExp.test(phone));


// \ to escape special charset
regExp	= /\(48\) 9999-9999/;
phone 	= "(48) 9999-9999";

console.log("\nEXEC:", regExp.exec(phone));
console.log("TEST:", regExp.test(phone));


// ^ to Start and $ end
regExp	= /^\(48\) 9999-9999$/;
phone 	= "(48) 9999-9999";

console.log("\nEXEC:", regExp.exec(phone));
console.log("TEST:", regExp.test(phone));


// Group
regExp	= /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
phone 	= "(48) 9876-1234";

console.log("\nEXEC:", regExp.exec(phone));
console.log("TEST:", regExp.test(phone));


// Multiple
regExp	= /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
phone 	= "(48) 9876-1234";

console.log("\nEXEC:", regExp.exec(phone));
console.log("TEST:", regExp.test(phone));


// Multiple with limit
regExp	= /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
phone 	= "(48) 99876-1234";

console.log("\nEXEC:", regExp.exec(phone));
console.log("TEST:", regExp.test(phone));


// hifen
regExp	= /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
phone 	= "(48) 998761234";

console.log("\nEXEC:", regExp.exec(phone));
console.log("TEST:", regExp.test(phone));