var _new = function(f){
	var res = {};

	if (f.prototype !== null){
		res.__proto__ = f.prototype;
	}

	var ret = f.apply(res, Array.prototype.slice.call(arguments, 1));

	if ((typeof ret === "object" || typeof ret === "function") && ret !== null){
		return ret;
	}

	return res;
};


var Person = function(name, age){
	this.name 	= name;
	this.age  	= age;
};

Person.prototype.gender	= "Male";


console.log("\nUsing new operator");

var john = new Person("John", 20);
console.log(john);
console.log(john.gender);



console.log("\nUsing _new function");

var obama = _new(Person, "Barack Obama", 54);
console.log(obama);
console.log(obama.gender);



console.log("\nUsing object");


var peter = {};
peter.__proto__ = Person.prototype;

Person.call(peter, "Peter", 25);
console.log(peter);
console.log(peter.gender);