// Factory Function
console.log("\nFactory Function");

var createPerson = function(name, age){
	return {
		name : name,
		age : age
	};
};

console.log(createPerson("John", 25));
console.log(createPerson("Mark", 28));


// Function Contructor
console.log("\nFunction Contructor");

var Person = function(name, age){
	this.name = name;
	this.age  = age;
};

console.log(new Person("John", 25));
console.log(new Person("Mark", 28));

var peter = {};
Person.call(peter, "Peter", 18);
console.log(peter);

var maria = {};
Person.call(maria, "Maria", 32);
console.log(maria);