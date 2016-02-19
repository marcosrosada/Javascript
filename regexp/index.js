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


// Add ^ to Start and $ end
regExp	= /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
phone 	= "(48) 9876-1234";

console.log("\nEXEC:", regExp.exec(phone));
console.log("TEST:", regExp.test(phone));