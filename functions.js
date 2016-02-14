// Function Declaration

console.log("Function Declaration");

function sun(param1, param2) {
	return param1 + param2;
}

console.log(sun);
console.log(sun(10, 15));


// Function Expression / Anonymous

console.log("Function Expression / Anonymous");

var sun = function(param1, param2){
	return param1 + param2;
}

console.log(sun);
console.log(sun(10, 15));