var regExp = /9999-9999/;
var phone  = "9999-9999";

console.log("\nEXEC:", regExp.exec(phone));
console.log("TEST:", regExp.test(phone));

// Add \ to escape special charset
regExp	= /\(48\) 9999-9999/;
phone 	= "(48) 9999-9999";

console.log("\nEXEC:", regExp.exec(phone));
console.log("TEST:", regExp.test(phone));

// Add ^ to Start and $ end
regExp	= /^\(48\) 9999-9999$/;
phone 	= "(48) 9999-9999";

console.log("\nEXEC:", regExp.exec(phone));
console.log("TEST:", regExp.test(phone));